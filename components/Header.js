import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import { APP_NAME } from '../config';
import { signout, isAuth } from '../actions/auth';
import styles from '../styles/Header.module.css';
import '.././node_modules/nprogress/nprogress.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();
NProgress.configure({ showSpinner: false });

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar color="white" light expand="md">
        <NavbarBrand>
          <Link href="/">
            <NavLink className="font-weight-bold">Powered by {APP_NAME}</NavLink>
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto " navbar>
              <>
                <NavItem>
                  <Link href="/projects">
                    <NavLink><code className={styles.code}>Projects</code></NavLink>
                  </Link>
                </NavItem>
              </>

              {!isAuth() && (
                <>
                  <NavItem>
                    <Link href="/signin">
                    <NavLink><code className={styles.code}>SignIn</code></NavLink>
                    </Link>
                  </NavItem>
                  {/* <NavItem>
                    <Link href="/signup">
                    <NavLink><code className={styles.code}>SignUp</code></NavLink>
                    </Link>
                  </NavItem> */}
                </>
              )}

              {isAuth() && isAuth().role === 0 && (
                <NavItem>
                  <Link href="/user">
                    {/* <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink> */}
                   <NavLink> <code className={styles.code}> Dashboard</code></NavLink>
                  </Link>
                </NavItem>
              )}

              {isAuth() && isAuth().role === 1 && (
                <NavItem>
                  <Link href="/admin">
                    {/* <NavLink><code className={styles.code}>{`${isAuth().name}'s Dashboard`}</code></NavLink> */}
                    <NavLink><code className={styles.code}> Dashboard</code></NavLink>
                  </Link>
                </NavItem>
              )}

              {isAuth() && (
                <NavItem>
                  <NavLink style={{ cursor: 'pointer' }} onClick={() => signout(() => Router.replace(`/signin`))}>
                     <code className={styles.code}>SignOut</code>
                  </NavLink>
                </NavItem>
              )}

              {/* <NavItem>
                <a href="/user/crud/project">
                  <NavLink className="btn btn-primary text-light">Add a new project</NavLink>
                </a>
              </NavItem> */}
            </Nav>
          </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
