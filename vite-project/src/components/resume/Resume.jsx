/* import './Resume.scss'
import { educationInfo, experienceInfo } from '../../Data'
import Icon1 from '../../assets/icon1.png'
import Icon2 from '../../assets/icon2.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Resume = () => {
  useEffect(() =>{
    Aos.init({ duration: 1000 });
  })

  return <div className="section resume section-padding">
    <div className="section-title" data-aos="fade-up">
        <h4>Resume</h4>
    </div>

    <div className="resume__container wrapper">
        <div className="resume__left">
            <div className="resume__title" data-aos="fade-down">
                <img src={Icon1} alt="icon" />
                <h2>education</h2>
            </div>
        </div>


        <div className="resume__education-container">
            {
                educationInfo.map(({degree, year, university, des}) => (
                    <div className="resume__card" key={degree} data-aos="fade-down">
                        <h3> {degree} </h3>
                        <span> {year} </span>
                        <h4> {university} </h4>
                        <p>{des}</p>
                    </div>
                )
                )}
        </div>

        <div className="resume__right">
            <div className="resume__title" data-aos="fade-up">
                <img src={Icon2} alt="icon" />
                <h2>Experience</h2>
            </div>

            <div className="resume__experience-container">
                    {
                        experienceInfo.map(({post, year, place, des}) => {
                            <div className="resume__card" key={year} data-aos="fade-up">
                                <h3>{post}</h3>
                                <span>{year}</span>
                                <h4>{place}</h4>
                                <p>{des}</p>
                            </div>
                        })
                    }
            </div>
        </div>
    </div>
  </div>
    
  
}

export default Resume */