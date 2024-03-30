import './form.css'
import formimg from './image/formimg.jpg'
import appstore from './image/appstore.svg'
import googleplay from './image/googleplay.svg'

const Form = () => {
    return ( <>
        <div className="form">
            <div className="form__container">
                <div className="form__block">
                    <img src={formimg} alt="image" className="form__img" />
                    <div className="form__form">
                        <div className="form__title">Хотите заказать проект?</div>
                        <div className="form__text">Оставьте заявку, и мы вам перезвоним</div>
                        <form action="" method='get' className="form__all">
                                <input className='form__input' placeholder='Имя' type="text" name='name' id='name' required/>                   
                                <input className='form__input' placeholder='E-mail' type="email" name='email' id='email' required />
                                <input className='form__input' placeholder='Телефон' type="tel" name='phone' id='phone' required />
                                <input type="submit" className='form__button' value='Отправить заявку' />
                        </form>
                    <a href="#" className="form__appstore"> <img src={appstore} alt=""/></a>
                    <a href="#" className="form__appstore"> <img src={googleplay} alt=""/></a>
                    </div>

                </div>

            </div>

        </div>
    
    </> );
}
 
export default Form;