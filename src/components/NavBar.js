import logo from '../icons/logo.svg';

function NavBar(props) {
  const pages = [
    {id: 'p0', title: 'About'},
    {id: 'p1', title: 'Careers'},
    {id: 'p2', title: 'Events'},
    {id: 'p3', title: 'Products'},
    {id: 'p4', title: 'Support'}
  ]

  return (
    <nav className={props.head ? 'nav-menu nav-menu--hdr' : 'nav-menu nav-menu--ftr'}>
      {pages.map((page) => <Page page={page} key={page.id}/>)}
    </nav>
  );
}

export default NavBar;

function Page(props) {
  return (
    <div className="nav-menu__link-container">
      <a className="nav-menu__link" href="/">{props.page.title}</a>
      <hr></hr>
    </div>
  );
}

export function Logo(props) {
  const tmp = `logo logo-${props.place}`;

  return (
    <div className="logo-container">
      <img src={logo} className={tmp} alt="logo" />
    </div>
  );
}


