import ScrollAnimation from "react-animate-on-scroll";
import { Container } from "./styles";



const Experience = () => {
    return (
        <Container id="experience">
            <ScrollAnimation animateIn="fadeInDown">
                <h2>Work Experience</h2>
            </ScrollAnimation>

            <div className="timeline">
                {/* Experience 1 */}
                <ScrollAnimation animateIn="fadeInDown">
                    <div className="timeline-item left">
                        <div className="content">
                            <h3>Associate Software Engineer</h3>
                            <span className="company">Aurigo Software Technology | Aug 2024 – Present</span>
                            <p>
                                - Developed workflow as a service (WaaS) microservice that can enable users to design and<br />
                                    manage custom workflows within the platform, allowing organizations to standardize and streamline review and
                                    approval processes.<br />
                                - Developed comprehensive unit test suites using Test-Driven Development for Aurigo Essentials,
                                    catching 95% of potential bugs and reducing post-release defects by 20%, leading to improved software stability.<br />
                                - Optimized UI performance by 40% for Aurigo Masterworks, collaborating with the modernization
                                    team to enhance scalability and efficiency.
                            </p>
                        </div>
                    </div>
                </ScrollAnimation>

                {/* Experience 2 */}
                <ScrollAnimation animateIn="fadeInDown">
                    <div className="timeline-item right">
                        <div className="content">
                        <h3>Software Developer Intern</h3>
                        <span className="company">Aurigo Software Technology | Feb 2024 – Jul 2024</span>
                        <p>
                            - Implemented a robust microservice integrating the Syncfusion library for
                                document viewing capabilities.<br />
                            - Designed efficient document handling for files up to 700MB, supporting multiple
                                formats<br />  (DOCX, XLSX, PDF) while maintaining robust performance.<br />
                            - Developed a centralized Aurigo-utils library featuring 20+ modular utility
                                components using Webpack, streamlining code reuse across projects and reducing redundant code by 40%.
                        </p>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </Container>
    );
}

export default Experience;