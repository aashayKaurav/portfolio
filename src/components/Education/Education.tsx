import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Education() {
  return (
    <Container id="education">
      <div className="education-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Education</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            My educational journey has been marked by dedication and a thirst for knowledge. Here's a glimpse into my academic background:
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <h3>Master of Engineering in Computer Science Engineering</h3>
          <p>
            <strong>Institution:</strong> Birla Institute of Technology and Science, Pilani<br />
            <strong>Year:</strong> 2022-2024
          </p>
          
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <h3>Bachelor of Technology in Computer Science Engineering</h3>
          <p>
            <strong>Institution:</strong> Technocrats Institute Of Technology<br />
            <strong>Year:</strong> 2017-2021
          </p>
        </ScrollAnimation>        
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <h3>Related Coursework</h3>
          <ul>
            <li>Cloud Computing</li>
            <li>Advanced Database</li>
            <li>Computer Networks</li>
            <li>Operating Systems</li>
            <li>Compiler Design</li>
          </ul>
        </ScrollAnimation>
      </div>
    </Container>
  )
}
