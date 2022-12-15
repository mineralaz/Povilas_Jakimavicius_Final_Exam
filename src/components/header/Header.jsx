import { Link, NavLink } from 'react-router-dom';
import { useAuthCtx } from '../../store/AuthContext';
import css from './Header.module.css';

function Header(props) {
  const { userLoggedIn, logout } = useAuthCtx();
  return (
    <header className={css.header}>
      <Link to="/">Logo</Link>
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
          {userLoggedIn && <button onClick={logout}>Logout</button>}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
