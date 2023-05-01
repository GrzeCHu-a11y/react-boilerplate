import {NavLink} from "react-router-dom";
import style from "./Navbar.module.scss"
const Navbar = () => {
    return (
        <nav className={style.nav}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    );
};

export default Navbar;