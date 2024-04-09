import './reviews.css'
import icon from './image/icon.svg'
const Reviews = () => {
    return ( <>
        <div className="reviews">
            <div className="reviews__container">
                <div className="reviews__title">Отзывы</div>
                    <div className="reviews__block">
                        <div className="reviews__body">
                            <img src={icon} alt="" className="reviews__image" />
                            <div className="reviews__name">Игорь Антонов</div>
                            <div className="reviews__text">Обратилась к Aveji по рекомендации. Команда сразу поняла, какой дизайн я хочу. Предоставили несколько вариантов и в течение недели сделали наброски. Итог понравился, все на высшем уровне.</div>
                        </div>
                        <div className="reviews__body">
                            <img src={icon} alt="" className="reviews__image" />
                            <div className="reviews__name">Ольга Иванова</div>
                            <div className="reviews__text">После пары заказов у компании Aveji убедилась, что за мебелью теперь только к ним. Абсолютно любые решения, в любых размерах и форм-факторе, то что нужно!</div>
                        </div><div className="reviews__body">
                            <img src={icon} alt="" className="reviews__image" />
                            <div className="reviews__name">Аркадий Макаров</div>
                            <div className="reviews__text">Aveji — настоящие профессионалы своего дела. Быстро поняли мою задумку, сделали дизайн, согласовали и изготовили мебель. А потом еще и бесплатно все собрали на месте. Большое спасибо!</div>
                        </div>
                    </div>            
            </div>
        </div>
    
        
    
    
    
    
    
    </> );
}
 
export default Reviews;