import './projects.css'
import projectImg1 from './img/project-img1.png'
import projectImg2 from './img/project-img2.png'
import projectImg3 from './img/project-img3.png'
import projectImg4 from './img/project-img4.png'
import projectImg5 from './img/project-img5.png'
import projectImg6 from './img/project-img6.png'
import arrow from './img/arrow.svg';

const Projects = () => {
    return (
        <>
        <div className="projects">
            <div className="projects__container">
                <div className="projects__title">Проекты</div>
                <ul className="projects__list">
                    <li className="projects__items"> <img src={projectImg1} alt="project"/> <a target='_blank' href='https://neximate.com/'>  Тумба под телевизор <img src={arrow} alt=""/></a> </li>
                    <li className="projects__items"> <img src={projectImg2} alt="project"/> <a target='_blank' href='https://neximate.com/'>Тумба под телевизор<img src={arrow} alt=""/></a> </li>
                    <li className="projects__items"> <img src={projectImg3} alt="project"/> <a target='_blank' href='https://neximate.com/'>Тумба под телевизор<img src={arrow} alt=""/></a></li>
                    <li className="projects__items"> <img src={projectImg4} alt="project"/> <a target='_blank' href='https://neximate.com/'>Тумба под телевизор<img src={arrow} alt=""/></a></li>
                    <li className="projects__items"> <img src={projectImg5} alt="project"/> <a target='_blank' href='https://neximate.com/'>Тумба под телевизор<img src={arrow} alt=""/></a></li>
                    <li className="projects__items"> <img src={projectImg6} alt="project"/> <a target='_blank' href='https://neximate.com/'>Тумба под телевизор<img src={arrow} alt=""/></a></li>
                </ul>
            </div>
        </div>
        </>
      );
}
 
export default Projects;