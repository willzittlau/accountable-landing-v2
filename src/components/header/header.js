/** @jsx jsx */
import { jsx, Container, Flex, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
import {Link} from 'components/link';
import Logo from 'components/logo';
import { DrawerProvider } from 'contexts/drawer/drawer.provider';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';

import LogoWhite from 'assets/brand/logo-white-text.svg';


export default function Header({ className }) {
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={LogoWhite} />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <Link
                activeClass="active"
                path={path}
                key={i}
              >
                {label}
              </Link>
            ))}
          </Flex>

          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    borderBottom: '1px solid #000',
    py: [4, null, 5],
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#FFF',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '&.sticky': {
      position: 'fixed',
      backgroundColor: '#FFF',
      color: 'heading',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: '20px',
      'nev > a': {
        color: 'heading',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    ml: 'auto',
    mr: 6,
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: 'heading',
      px: 20,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      color: '#000',
      '&.active': {
        color: 'primary',
      },
      '&:hover': {
        color: 'primary',
      },
    },
  },
};
