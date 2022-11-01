import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import ROUTES from './AppRouteNames';

const NavItem: React.FC<{ to: string; end?: boolean }> = ({
  to,
  end,
  children,
}) => (
  <Nav.Item>
    <NavLink
      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      to={to}
      end={end}
    >
      {children}
    </NavLink>
  </Nav.Item>
);

const AppNavBar = (): ReactElement => (
  <nav className='navbar-nav'>
    <Nav>
      <NavItem to={ROUTES.HOME} end>
        Home
      </NavItem>
      <NavItem to={ROUTES.GLOBAL}>Global styles</NavItem>
      <NavItem to={ROUTES.LOCAL}>Local styles</NavItem>
      <NavItem to={ROUTES.NATIVE_TAGS}>Styled Tags</NavItem>
      <NavItem to={ROUTES.STYLED_COMPONENT}>Styled Components</NavItem>
      <NavItem to={ROUTES.VERSION}>Version</NavItem>
    </Nav>
  </nav>
);

export default AppNavBar;
