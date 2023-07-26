import List from '../List/List';
import Logo from '../Logo/Logo';
import './Navbarstyle.css';

function Navbar({list}) {
  return (
    <div className="nav-bar">
        <Logo />
        <List list={list} />
    </div>
  )
}

export default Navbar