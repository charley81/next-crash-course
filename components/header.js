import headerStyles from '../styles/header.module.scss'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> Newz
      </h1>
      <p className={headerStyles.description}>
        keep up to date with the latest newz
      </p>
    </div>
  )
}

export default Header
