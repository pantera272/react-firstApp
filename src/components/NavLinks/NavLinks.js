import styles from './NavLinks.module.scss';

const NavLinks = () => {
  return (
    <div className={styles.container}>
      <a href="/"><i className={styles.icon +' fa fa-tasks'}></i></a>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/favorite">Favorite</a></li>
        <li><a href="/about">Aboute</a></li>
      </ul>
    </div>
  )
}

export default NavLinks;