import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";
const Navbar = () => {
  return (
    <nav className={style.nav}>
      <NavLink to="/" className={style.navlink}>
        Home
      </NavLink>
      <NavLink to="/about" className={style.navlink}>
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
