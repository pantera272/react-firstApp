import styles from './NavLinks.module.scss';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <div className={styles.container}>
      <a href="/"><i className={styles.icon +' fa fa-tasks'}></i></a>
      <ul>
        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
      </ul>
    </div>
  )
}

export default NavLinks;