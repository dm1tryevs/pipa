import './footer.css'

const Footer = () => {
    return ( <>
    
        <div className="footer">
            <div className="footer__container">
                <div className="footer__block">
                    <div className="footer__aveji">© 2023 AVEJI <br />ВСЕ ПРАВА ЗАЩИЩЕНЫ</div>
                    <div className="footer__policy"> <a href="#">Политика конфеденциальности</a> <span>/</span> <a href="#">Оплата и доставка</a></div>
                    <div className="footer__social">
                    <a target='_blank' href='https://youtu.be/dQw4w9WgXcQ' className="footer__vk">ВКОНТАКТЕ</a>
                    <a target='_blank' href='https://youtu.be/dQw4w9WgXcQ' className="footer__tg">ТЕЛЕГРАМ</a>
                    </div>
                </div>
            </div>

        </div>

    </> );
}
 
export default Footer;