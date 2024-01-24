import "../../components/hero/Hero.scss";
import HeroImg from "../../assets/profi.jpg";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Hero = () => { 
    useEffect(() =>{
        Aos.init({ duration: 1000 });
    })
    return (
        <section className="hero">
            <div className="hero__container wrapper">
                <div className="hero__left" data-aos="fade-up">
                    <h3>Hello, Im</h3>
                    <h1>
                        Brian <br />
                        Basualdo Torres
                    </h1>
                    <h2>FullStack Programming</h2>
                    <a href="#" className="btn">
                        Contact Me
                    </a>
                </div>
                <div className="hero__right" data-aos="fade-left">
                    <div className="hero__right-img">
                        <img src={HeroImg} alt="hero" />
                    </div>
                </div>
            </div> 
        </section>
    ) 
} 

export default Hero