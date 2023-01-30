import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';



export const NavBar = () => {
    return (
        <header>
               
             <nav>
            <span className='logo'>
                <img src={logo} alt="" />
            </span>
            <ul>
                <li> 
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>

                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        </header>
    )
}