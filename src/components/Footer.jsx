import logo from '../assets/logo.png'
import '../styles/Footer.css'
 
function Footer() {
    return (
        <div className='footer'>     
            <img src={logo} alt='logo-Kasa' className='footer__logo' />     
            <div className='footer__text'>© 2020 Kasa. All rights reserved</div>
        </div>        
    )
}

export default Footer