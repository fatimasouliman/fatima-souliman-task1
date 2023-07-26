import './Footerstyle.css';
import Logo from './../Logo/Logo';
import List from './../List/List';
import Icons from '../icons/Icons';

function Footer() {
    const list = [
        "Home",
        "About",
        "Doc",
        "Github",
    ]
  return (
    <footer className='footer'>
        <Logo />
        <List list={list}/>
        <Icons />
        <p>powred by Fatima souliman</p>
    </footer>
  )
}

export default Footer