import './bruger.css'

const Bruger = () => {
    return ( <>
    
    <nav role="navigation">
  <div id="menuToggle">
  
    <input type="checkbox" />

    <span></span>
    <span></span>
    <span></span>

    <ul id="menu">
      <a href="#"><li>О нас</li></a>
      <a href="#"><li>Проекты</li></a>
      <a href="#"><li>Материалы</li></a>
      <a href="#"><li>Отзывы</li></a>
      <a className='phone' href="tel:+79999999999"><li>+79999999999</li></a>
    </ul>
  </div>
</nav>
    </> );
}
 
export default Bruger;