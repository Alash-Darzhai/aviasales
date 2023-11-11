import logo from '../header/logo.svg'

import classes from './header.module.scss'

const Header = () => {
  return <img src={logo} className={classes.logo} />
}

export default Header
