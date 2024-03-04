import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from './Logo'
function PageNav() {
  return (
    <nav className={styles.nav}>
      <span className = {styles.logoclass}>
      <Logo />
      <h2>Wander Blog</h2>
      </span>
      <ul>
        <li>
          <NavLink to="/price">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
