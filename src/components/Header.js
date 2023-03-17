import '../styles/Header.css'
import NavBar from './NavBar.js'
import { Logo } from './NavBar.js'

function Header(props) {
  return (
    <header>
      <Logo place="hd"/>
      <NavBar head={true} />
      <HamburgerMenu doIt={props.doIt}/>
    </header>
  );
}

export default Header;

function HamburgerMenu(props) {
  return (
    <div className="hamburger-menu-container" >
      <button className="hamburger-menu" id="menu-btn" onClick={props.doIt}></button>
    </div>
  );
}

