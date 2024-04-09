import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';


import projectImg1 from './img/project-img1.png'
import projectImg2 from './img/project-img2.png'
import projectImg3 from './img/project-img3.png'
import projectImg4 from './img/project-img4.png'
import projectImg5 from './img/project-img5.png'
import projectImg6 from './img/project-img6.png'
import arrow from './img/arrow.svg';



const Slider = () => {
    return ( 
        <Swiper 
        pagination={true} modules={[Pagination]}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        initialSlide={1}
        centeredSlides={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="projects__items slider__items"> <img src={projectImg3} alt="project"/> <a target='_blank' href='https://neximate.com/'>Тумба под телевизор<img src={arrow} alt=""/></a></SwiperSlide>
        <SwiperSlide className="projects__items slider__items"><img src={projectImg1} alt="project"/> <a target='_blank' href='https://neximate.com/'>Тумба под телевизор <img src={arrow} alt=""/></a></SwiperSlide>
        <SwiperSlide className="projects__items slider__items"><img src={projectImg4} alt="project"/> <a target='_blank' href='https://neximate.com/'>Тумба под телевизор<img src={arrow} alt=""/></a></SwiperSlide>
        <SwiperSlide className="projects__items slider__items"><img src={projectImg2} alt="project"/> <a target='_blank' href='https://neximate.com/'>Тумба под телевизор<img src={arrow} alt=""/></a></SwiperSlide>
        <SwiperSlide className="projects__items slider__items"><img src={projectImg5} alt="project"/> <a target='_blank' href='https://neximate.com/'>Тумба под телевизор<img src={arrow} alt=""/></a></SwiperSlide>
        <SwiperSlide className="projects__items slider__items"><img src={projectImg6} alt="project"/> <a target='_blank' href='https://neximate.com/'>Тумба под телевизор<img src={arrow} alt=""/></a></SwiperSlide>
      </Swiper>
     );
}
 
export default Slider;