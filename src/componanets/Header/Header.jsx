import Navbar from "../Navbar/Navbar";
import './Headerstyle.css';

function Header() {
    const list=[
        'Github',
        'sigin in'
    ]
  return (
    <header className="header">
        <Navbar list={list}/>
    </header>
  )
}

export default Header