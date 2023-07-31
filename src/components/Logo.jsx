import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/" style={{display: 'flex', alignItems: 'center', textDecoration: 'none'}}>
      <img src="/wanderlogo.jpg" alt="WanderlustTracker logo" className={styles.logo} />
      <h5 className={styles.LogoText}>WanderlustTracker</h5>
    </Link>
  );
}

export default Logo;
