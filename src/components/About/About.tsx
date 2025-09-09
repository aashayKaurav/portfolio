import { Container } from "./styles";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import springboot from "../../assets/icons8-spring-boot.svg";
import reactIcon from "../../assets/react-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import java from "../../assets/java.svg";
import mysql from "../../assets/mysql-icon.svg";
import postgresql from "../../assets/postgresql.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInDown">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInDown" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Aashay, a full-stack developer with a passion for creating custom online experiences for my clients. With a skill set including HTML, CSS, JavaScript, and React, I have the tools to bring any website vision to life.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInDown" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            After graduating with a degree in Computer Science Engineering, I decided to follow my passion for higher studies. I successfully cracked the GATE 2022 exam with a 97 percentile, which led to my selection for the M.E. in Computer Science course at BITS Pilani (2022-2024).
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInDown" delay={0.3 * 1000}>
          <p>
            Whether you need a brand-new website or want to refresh your existing online presence, I’m here to help. Let’s collaborate to transform your vision into a stunning and effective web experience.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInDown" delay={0.4 * 1000}>
          <h3>My main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={boostrapIcon} alt="Bootstrap" />
            </ScrollAnimation>
          </div>     
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={java} alt="Java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={springboot} alt="Spring Boot" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={mysql} alt="MySQL" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={postgresql} alt="PostgreSQL" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </Container>
  )
}
