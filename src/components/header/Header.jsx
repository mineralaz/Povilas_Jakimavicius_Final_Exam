import { Link, NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header>
      <Link to="/">Logo</Link>
      <nav>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/shops">Shops</NavLink>
        <NavLink to="/add-shop">Add shop</NavLink>
      </nav>
    </header>
  );
}
export default Header;
