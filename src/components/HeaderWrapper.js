import Header from './Header.js';
import '../styles/HeaderWrapper.css';
import { useState } from 'react';

function HeaderWrapper() {
  const [show, setShow] = useState(false);

  const ShowMenu = () => {
    if (show === true) {
      setShow(false);
      document.getElementById('menu-btn').style.backgroundImage = 'url(/images/icon-hamburger.svg)';
    } else {
      setShow(true);
    }
  }

  return (
    <div className="head-wrp mrg-btm pad-sides" id="head-wrp">
      <Header doIt={ShowMenu} />
      <HeaderTitle />
      { show && (<CreateMenu />)}
    </div>
  );
}

export default HeaderWrapper;

function HeaderTitle() {
  return (
    <div className="head-wrp__title-container" id="head-title">
      <h1 className="head-wrp__title">IMMERSIVE EXPERIENCES THAT DELIVER</h1>
    </div>
  );
}

function CreateMenu() {
  const pagesCaps = ['ABOUT', 'CAREERS', 'EVENTS', 'PRODUCTS', 'SUPPORT']
  document.getElementById('menu-btn').style.backgroundImage = 'url(/images/icon-close.svg)';

  const CreatePage = (props) => {
    return <a className="open-menu__link" href="/">{props.page}</a>;
  }

  return (
    <div className="open-menu">
      {pagesCaps.map((page) => <CreatePage page={page} />)}
    </div>
  );
}

