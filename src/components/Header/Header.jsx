import logo from './images/logo.svg'
import './header.css'
import Bruger from './Burger.jsx';
const Header = () => {
    return ( 
        <>
        <div className="header">
            <div className="header__container">
                <div className="header__block">
                    <a  className="header__logo" href="#"> <img src={logo} alt="logo" className="header__logo" /></a>
                    <ul className="header__nav">
                        <li className="header__nav-items"><a target='_blank' href="https://youtu.be/dQw4w9WgXcQ">О нас</a></li>
                        <li className="header__nav-items"> <a target='_blank' href="https://youtu.be/dQw4w9WgXcQ">Проекты</a> </li>
                        <li className="header__nav-items"> <a target='_blank' href="https://youtu.be/dQw4w9WgXcQ">Материалы</a> </li>
                        <li className="header__nav-items"><a target='_blank' href="https://youtu.be/dQw4w9WgXcQ">Отзывы</a> </li>
                    </ul>
                    <a href="tel:+79999999999" className="header__phone">+7 999 999 99 99</a>
                    <div className="header__burger"><Bruger></Bruger></div>
                </div> 
            </div>
        </div>               
        </>
     );
    
}
 
export default Header;