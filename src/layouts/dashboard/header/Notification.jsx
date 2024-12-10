import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import NotificationsIcon from '@mui/icons-material/Notifications';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import RefreshIcon from '@mui/icons-material/Refresh';
import {
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';

import { permitsCloseToExpire } from 'src/api';

function NotificationItem({ notification, handleOnClick }) {
  const router = useRouter();

  const handleRedirectTo = () => {
    const url = `/dashboard/alvaras/${notification.id}/edit/`;
    router.push(url);
  };

  return (
    <>
      <Box
        style={{
          width: '100%',
          minWidth: '32rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          margin: '16px 0',
        }}
        onClick={handleOnClick}
      >
        <Box>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Typography style={{ paddingLeft: '16px' }}>
              <strong>Unidade:</strong> {`${notification.company?.name}`}
            </Typography>
            <Typography style={{ paddingLeft: '16px' }}>
              <strong>Regional:</strong>{' '}
              {`${notification.company?.regionalName}`}
            </Typography>
          </Box>
          <Typography style={{ paddingLeft: '16px' }}>
            <strong>Alvará:</strong> {`${notification.typeName}`}
          </Typography>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Typography style={{ paddingLeft: '16px' }}>
              <strong>Inicio da renovação:</strong>{' '}
              {`${notification.formatedDeadLineDate}`}
            </Typography>
            <Typography style={{ paddingLeft: '16px' }}>
              <strong>Vencimento:</strong>{' '}
              {`${notification.formatedExpirationDate}`}
            </Typography>
          </Box>
        </Box>
        <Button onClick={handleRedirectTo}>
          <OpenInNewIcon />
        </Button>
      </Box>
      <Divider />
    </>
  );
}

export function Notification() {
  const [notifications, setNotifications] = useState([]);
  const [menuRef, setMenuRef] = useState(null);
  const open = Boolean(menuRef);

  const verifyIfHaveNotifications = async () => {
    const { data } = await permitsCloseToExpire();

    setNotifications(data);
  };

  const handleOpenMenu = event => {
    setMenuRef(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuRef(null);
  };

  useEffect(() => {
    verifyIfHaveNotifications();
  }, []);

  return (
    <Box style={{ position: 'relative' }}>
      <Tooltip
        title={`Você possui ${notifications.length} notificações`}
        placement="left"
      >
        <Button
          onClick={handleOpenMenu}
          style={{
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            padding: 0,
            width: '2.4rem',
            minWidth: '2.4rem',
          }}
        >
          {!!notifications.length && (
            <span
              style={{
                position: 'absolute',
                backgroundColor: 'red',
                width: '8px',
                height: '8px',
                right: 0,
                top: 0,
                borderRadius: '50%',
              }}
            />
          )}
          <NotificationsIcon fontSize="large" color="action" />
        </Button>
      </Tooltip>

      <Menu
        anchorEl={menuRef}
        open={open}
        onClose={handleCloseMenu}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box style={{ padding: '0 16px' }}>
          {notifications.length ? (
            notifications?.map(notification => (
              <NotificationItem
                notification={notification}
                handleOnClick={handleCloseMenu}
              />
            ))
          ) : (
            <Typography style={{ display: 'block', padding: '8px' }}>
              Sem alvarás próximo do vencimento ou período de renovação
            </Typography>
          )}
        </Box>

        <MenuItem
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            margin: '16px 0 8px 0',
            gap: '8px',
          }}
          onClick={verifyIfHaveNotifications}
        >
          <RefreshIcon color="action" />
          Verificar novas notificações
        </MenuItem>
      </Menu>
    </Box>
  );
}
