import facebook from '../icons/icon-facebook.svg';
import twitter from '../icons/icon-twitter.svg';
import pinterest from '../icons/icon-pinterest.svg';
import instagram from '../icons/icon-instagram.svg';
import NavBar from './NavBar.js';
import { Logo } from './NavBar.js';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="pad-sides pad-sides-dfr">
      <Icons />
      <Links />
    </footer>
  );
}

export default Footer;

function Icons() {
  const iconsList = [
    {id: 'f0', icon: facebook},
    {id: 'f1', icon: twitter},
    {id: 'f2', icon: pinterest},
    {id: 'f3', icon: instagram},
  ];

  return (
    <>
      <Logo place="ft" />
      <div className="ft__icons-container"> 
        {iconsList.map((icon) => <CreateIcon icon={icon} key={icon.id} />)}
      </div>
    </>
  );
}

function CreateIcon(props) {
  return (
    <div className="ft__icon-wrapper">
      <img className="ft__icon" src={props.icon.icon} alt="" />
      <hr className="ft__hr-io"></hr>
    </div>
  );
}

function Links() {
  return (
    <>
      <NavBar />
      <p className="ft__copyright">
        © 2021 Loopstudios. All rights reserved.
      </p>
    </>
  );
}
