import styles from './headerStyles.ts';
import {Link} from "react-router-dom";

const Header = () => {

  return (
    <header style={styles.header}>
      <ul style={styles.list}>
        <li><Link style={styles.link} to={'/'}>Play</Link></li>
        <li><Link style={styles.link} to={'/edit'}>Edit</Link></li>
      </ul>
    </header>
  )
}

export default Header;
