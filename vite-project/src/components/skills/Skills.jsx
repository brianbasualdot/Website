import "./Skills.scss"
import { skillsInfo } from "../../Data"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Skills = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    });

  return <section className="skills section-padding">
    <div className="section-title" data-aos="fade-up">
        <h4>Skills</h4>
    </div>

    <div className="skills__container wrapper">
        <div className="skills_left" data-aos="fade-right">
            <h2>Stack technologies</h2>
            <p>
             A search engine for optimized solutions. Passionate about being in an implementation phase
             of a new career as a professional web developer. I am an ambitious, adventurous person,
             tireless and motivated.
            </p>
        </div>


        <div className="skills_right" data-aos="fade-left">
            {
                skillsInfo.map(({name, percent}) => (
                    <div className="skills__card" key={name} data-aos="fade-up">
                        <h3>{name}</h3>
                        <span> {percent} </span>
                    </div>
                ))
            }
        </div>
    </div>
  </section>
    
  
}

export default Skills