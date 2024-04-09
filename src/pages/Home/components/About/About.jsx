import './about.css'
import furnitureSmall from './img/furnitureSmall.png'
import furnitureBig from './img/furnitureBig.png'
const About = () => {
    return ( 
        <>
        <div className="about">
            <div className="about__container">
                <div className="about__block">
                <div className="about__title title">
                    <h1 className="title__text">Эксклюзивная и нестандартная мебель для дома</h1>
                    <a target='_blank' href='https://youtu.be/dQw4w9WgXcQ' className="title__order">ЗАКАЗАТЬ ПРОЕКТ</a>
                </div>
                <div className="about__furniture furniture">
                    <div className="furniture__left"><div className="furniture__text">Мы можем произвести любую мебель для вашего проекта и найти производственное решение любой задумки.</div>
                    <a target='_blank' href='https://youtu.be/dQw4w9WgXcQ' className="furniture__order title__order">ЗАКАЗАТЬ ПРОЕКТ</a>
                    <img src={furnitureSmall} alt="furniture" className="furniture__img" /></div>
                    
                    <img src={furnitureBig} alt="furniture" className="furniture__big-img" />
                </div>
                </div>
                <div className="about__info info">
                    <h2 className="info__title">Более 5 лет создаем мебель для вашего комфорта</h2>
                    <h2 className="info__title2 info__title">О компании</h2>
                    <div className="info__more">
                        <ul className="info__text">
                            <li className="info__text-itm">Мы — команда профессионалов, которые могут произвести любую мебель для вашего проекта, а также найти производственное решение любой задумки.</li>
                            <li className="info__text-itm">Наша основная цель — реализовывать самые смелые задумки, и делать это качественно и аккуратно.</li>
                            <li className="info__text-itm">В качестве материалов мы используем натуральные — стекло, дерево, бетон, камень, металл и эпоксидную смолу.</li>
                        </ul>
                        <ul className="info__list">
                            <li className="info__items"><span>1 год</span><br />гарантии на всю продукцию</li>
                            <li className="info__items"><span>300+</span><br />выполненных проектов</li>
                            <li className="info__items"><span>15 дней</span><br />срок производства</li>
                        </ul>
                    </div>
                </div>
                <div className="about__how how">
                    <div className="how__block">
                        <h2 className="how__title">Как мы работаем</h2>
                        <div className="how__right right-how">
                            <div className="right-how__title">Алгоритм работы с нами для удобства и понимания проекта</div>
                            <div className="right-how__text">
                                <h3 className="right-how__main">Идея</h3>
                                <div className="right-how__discription">Клиент приходит к нам с идеей. Это может быть изображение/ эскиз или другой референс. А мы думаем над тем, как это реализовать, делаем технические чертежи и предлагаем решения по материалам.</div>
                            </div>
                            <div className="right-how__line"></div>
                            <div className="right-how__text">
                                <h3 className="right-how__main">Техническое задание</h3>
                                <div className="right-how__discription">Вместе с клиентом формулируем корректное ТЗ, которое включает в себя визуализацию изделия, эскизный чертёж с габаритами, информацию по материалам и отделке, срок реализации проекта и другие обязательные пункты.</div>
                            </div>
                            <div className="right-how__line"></div>
                            <div className="right-how__text">
                                <h3 className="right-how__main">Коммерческое предложение</h3>
                                <div className="right-how__discription">Предпочтительно используем натуральные материалы. Но любую смету можем оптимизировать, упростив материалы или конструктив. Сможем подстроиться под бюджет клиента и согласуем коммерческое предложение</div>
                            </div>
                            <div className="right-how__line"></div>
                            <div className="right-how__text">
                                <h3 className="right-how__main">Подготовка рабочего проекта</h3>
                                <div className="right-how__discription">Создадим рабочую документацию и чертежи. Это фундамент качественного производства. На этом этапе утверждаем с клиентом все габариты и материалы, чертежи и приступаем к производству.</div>
                            </div>
                            <div className="right-how__line"></div>
                            <div className="right-how__text">
                                <h3 className="right-how__main">Производство и монтаж</h3>
                                <div className="right-how__discription">Производство занимает от 15 рабочих дней, в зависимости от сложности и объёма. Монтажом тоже занимаемся самостоятельно. Ведь мы это сделаем быстро и аккуратно.</div>
                            </div>
                            <div className="right-how__line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default About;