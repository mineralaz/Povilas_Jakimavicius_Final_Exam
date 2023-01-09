import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuthCtx } from '../../store/AuthContext';
import Button from '../UI/Button';
import css from './Header.module.css';

function Header(props) {
  const { userLoggedIn, logout } = useAuthCtx();
  const [small, setSmall] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setSmall(window.pageYOffset > 30);
    });
  }, []);

  return (
    <header
      className={small ? `${css.header} ${css.bgTransparent}` : css.header}
    >
      <Link to="/" className={css.logo}>
        OurShops
      </Link>
      <nav>
        <ul>
          {!userLoggedIn && (
            <li>
              <NavLink
                className={css.navLink}
                activeClassName={css.activeNavLink}
                to="/register"
              >
                Register
              </NavLink>
            </li>
          )}
          {!userLoggedIn && (
            <li>
              <NavLink
                className={css.navLink}
                activeClassName={css.activeNavLink}
                to="/login"
              >
                Login
              </NavLink>
            </li>
          )}

          {userLoggedIn && (
            <li>
              <NavLink
                className={css.navLink}
                activeClassName={css.activeNavLink}
                to="/shops"
              >
                Shops
              </NavLink>
            </li>
          )}

          {userLoggedIn && (
            <li>
              <NavLink
                className={css.navLink}
                activeClassName={css.activeNavLink}
                to="/add-shop"
              >
                Add shop
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
      {userLoggedIn && <Button onClick={logout}>Logout</Button>}
    </header>
  );
}
export default Header;
