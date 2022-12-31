import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/Header.css'
 
function Header() {
    const routeLocation = useLocation()
    return (
        <div className='header'> 
            <img src={logo} alt='logo-Kasa' className='header__logo' />     
            <nav>
                <ul>
                    <li className={routeLocation.pathname === "/" ? "active" : ""}><Link to="/">Accueil</Link></li>
                    <li className={routeLocation.pathname === "/Apropos" ? "active" : ""}><Link to="/Apropos">A propos</Link></li>
                </ul>
            </nav>   
        </div>
        
    )
}

export default Header

