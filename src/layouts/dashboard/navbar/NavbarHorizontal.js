import { memo } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Container, AppBar } from '@mui/material';
// config
import { HEADER } from '../../../config';
// components
import { NavSectionHorizontal } from '../../../components/nav-section';
//
import navConfig from './NavConfig';
import { useState } from 'react';
import { useEffect } from 'react';

// ----------------------------------------------------------------------

const RootStyle = styled(AppBar)(({ theme }) => ({
  transition: theme.transitions.create('top', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  width: '100%',
  position: 'fixed',
  zIndex: theme.zIndex.appBar,
  padding: theme.spacing(1, 0),
  boxShadow: theme.customShadows.z8,
  top: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

function NavbarHorizontal() {
  const [newNavBarConfig,setNewNavBarConfig] = useState([])
  useEffect(()=>{
    const claims = localStorage.getItem('claims')
    const newNavConfig = []

    const checkRoles = entityName => claims?.includes(`ROLE_SELECT_${entityName}`.toUpperCase()) || claims?.includes(`ROLE_ADMIN_${entityName}`.toUpperCase())
    for(const nc of navConfig){
      const newItems = nc.items.filter(i => {
        if(!i.entityName)
          return true
        return checkRoles(i.entityName)
      }) 
      //Valida os childrens
      const arrNewItem = []
      for(let newItem of newItems){
        if(!newItem.children){
          arrNewItem.push({...newItem})
          continue
        }
        const newChildren = newItem.children.filter(c =>{
          if(!c.entityName)
            return true
          return checkRoles(c.entityName)
        })
        arrNewItem.push({...newItem,['children']:newChildren})
      }
      const newConfig = {...nc,['items']: arrNewItem}
      newNavConfig.push(newConfig)
      
    }
    setNewNavBarConfig(newNavConfig)
  },[])

  return !newNavBarConfig || newNavBarConfig.length == 0 ? null :  (
    <RootStyle>
      <Container maxWidth={false}>
        <NavSectionHorizontal navConfig={newNavBarConfig} />
      </Container>
    </RootStyle>
  );
}

export default memo(NavbarHorizontal);
