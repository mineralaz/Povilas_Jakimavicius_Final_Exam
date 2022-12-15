import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';

function Header(props) {
  return (
    <header className={css.header}>
      <Link to="/">Logo</Link>
      <nav>
        <NavLink
          className={css.navLink}
          activeClassName={css.activeNavLink}
          to="/register"
        >
          Register
        </NavLink>
        <NavLink
          className={css.navLink}
          activeClassName={css.activeNavLink}
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          className={css.navLink}
          activeClassName={css.activeNavLink}
          to="/shops"
        >
          Shops
        </NavLink>
        <NavLink
          className={css.navLink}
          activeClassName={css.activeNavLink}
          to="/add-shop"
        >
          Add shop
        </NavLink>
      </nav>
    </header>
  );
}
export default Header;
