import styles from '../styles/layout.module.scss'
import Nav from './nav'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Nav />
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default Layout
