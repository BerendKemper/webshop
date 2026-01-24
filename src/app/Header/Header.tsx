
import { Link } from "react-router-dom";
import './Header.css';

export function Header() {
  return (
    <nav id="header" >
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
}