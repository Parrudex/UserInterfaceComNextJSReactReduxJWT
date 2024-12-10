import { useState, useEffect } from 'react';

import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { Box, Divider, Typography, Stack, MenuItem } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { useSnackbar } from 'notistack';

import { IconButtonAnimate } from 'src/components/animate';
import Label from 'src/components/Label';
import MenuPopover from 'src/components/MenuPopover';
import MyAvatar from 'src/components/MyAvatar';
import useAuth from 'src/hooks/useAuth';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import { ContactModal } from 'src/layouts/dashboard/header/ContactModal';
import { PATH_DASHBOARD, PATH_AUTH } from 'src/routes/paths';

export function setCustomerName(_customerName) {
  console.log('customerName', _customerName);
  if (!_customerName) customerName = localStorage.getItem('customerName');
  else customerName = _customerName;
  localStorage.setItem('customerName', customerName);
}
let customerName = '';

export default function AccountPopover() {
  const router = useRouter();
  const [menu, setMenu] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const isMountedRef = useIsMountedRef();
  const { user, logout } = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  const MENU_OPTIONS = [
    {
      label: 'Inicio',
      linkTo: '/',
    },
    {
      label: 'Perfil',
      linkTo: PATH_DASHBOARD.user.edit(user.id),
    },
  ];

  const handleOpenMenu = event => {
    setMenu(event.currentTarget);
  };

  const [customer, setCustomer] = useState(customerName);

  useEffect(() => {
    if (customerName) setCustomer(customerName);
  }, [customerName]);

  const handleCloseMenu = () => {
    setMenu(null);
  };

  const handleToggleModalIsOpen = () => {
    handleCloseMenu();
    setModalIsOpen(value => !value);
  };

  const handleLogout = async () => {
    try {
      await logout();
      router.replace(PATH_AUTH.login);

      if (isMountedRef.current) {
        handleCloseMenu();
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Unable to logout!', { variant: 'error' });
    }
  };

  return (
    <>
      {customer ? <Label>{customer}</Label> : null}
      <ContactModal
        modalIsOpen={modalIsOpen}
        onClose={handleToggleModalIsOpen}
      />

      <IconButtonAnimate
        onClick={handleOpenMenu}
        sx={{
          p: 0,
          ...(menu && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: theme => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <MyAvatar />
      </IconButtonAnimate>

      <MenuPopover
        open={Boolean(menu)}
        anchorEl={menu}
        onClose={handleCloseMenu}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          '& .MuiMenuItem-root': {
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {user?.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {user?.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map(option => (
            <NextLink key={option.label} href={option.linkTo} passHref>
              <MenuItem key={option.label} onClick={handleCloseMenu}>
                {option.label}
              </MenuItem>
            </NextLink>
          ))}
          <MenuItem onClick={handleToggleModalIsOpen}>Suporte</MenuItem>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
          Sair
        </MenuItem>
      </MenuPopover>
    </>
  );
}
