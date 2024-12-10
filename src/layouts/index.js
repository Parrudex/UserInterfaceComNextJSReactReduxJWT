/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

import AuthGuard from '../guards/AuthGuard';
import DashboardLayout from './dashboard';
import LogoOnlyLayout from './LogoOnlyLayout';
import MainLayout from './main';

export default function Layout({ variant = 'dashboard', children }) {
  if (variant === 'logoOnly') {
    return <LogoOnlyLayout> {children} </LogoOnlyLayout>;
  }

  if (variant === 'main') {
    return <MainLayout>{children}</MainLayout>;
  }

  return (
    <AuthGuard>
      <DashboardLayout> {children} </DashboardLayout>
    </AuthGuard>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['dashboard', 'main', 'logoOnly']),
};
