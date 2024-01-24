import "./About.scss";
import Img from "../../assets/about.jpg"
import {aboutInfo} from "../../Data";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const About = () => {
  useEffect(() => {
    Aos.init({duration: 1000})
  });

  return (
  <section className="about section-padding">
    <div className="section-title" data-aos="fade-up">
      <h4>About Me</h4>
    </div>

    <div className="about__container wrapper">
      <div className="about__left">
        <div className="about__left-img" data-aos="fade-right">
          <img src={Img} alt="about" />
        </div>
      </div>

      <div className="about__right" data-aos="zoom-in-up">
        <h2>Hi, Im Brian</h2>
        <h4>Fullstack programming</h4>
        <p> Since I was a child I had a fascination with technology and its innovations, today I find myself immersed in the world of programming
          acquiring new knowledge and new complementary skills, I have carried out some projects to capture what I learned.
          Below some information to know me more...
        </p>

      <div className="about__right-info-container" data-aos="fade-down">
        {aboutInfo.map(({name, detail}) => (
        <div className="about__right-info" key={name}>
          <p>{name}</p>
          <p> : {detail}</p>
        </div> ))}
      </div>
      </div>
    </div>
  </section>
  );
};

export default About