/* eslint-disable react/require-default-props */
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

import Logo from '../components/Logo';

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(5, 5, 0),
  },
}));

export default function LogoOnlyLayout({ children }) {
  return (
    <>
      <HeaderStyle>
        <Logo />
      </HeaderStyle>
      {children}
    </>
  );
}

LogoOnlyLayout.propTypes = {
  children: PropTypes.node,
};
