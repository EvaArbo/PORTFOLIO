import { Col, Container, Row } from "react-bootstrap";
import  Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
export const  Skills =()=>{
    const responsive ={
        superLargeDEsktope:{
            breakpoint:{max:400, min:3000},
            items:5
        },
        desktop:{
            breakpoint:{max:3000, min:1024},
            items:3
        },
        tablet:{
            breakpoint:{max:1024, min:464},
            items:2
        },
        mobile:{
            breakpoint:{max:464, min:0},
            items:1
        },
    };
    

    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>As a Junior Developer, I enjoy building user-friendly applications and exploring modern web 
                          technologies. My skills include working with HTML, CSS, JavaScript, and React to create clean, 
                           responsive designs. I am also passionate about problem-solving, debugging, and continuously 
                           learning new tools to improve my craft.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="items">
                                <img src={meter1} alt="Progress meter showing front& back-end development skills"/>
                                <h5>Front&Back-End Development</h5>

                            </div>
                            <div className="items">
                                <img src={meter2} alt="Progress meter highlighting creative UI and UX design"/>
                                <h5>Creative UI/UX Design</h5>

                            </div>
                            <div className="items">
                                <img src={meter3} alt="Progress meter showing responsive design proficiency"/>
                                <h5>Responsive Layouts</h5>

                            </div>
                            <div className="items">
                                <img src={meter1} alt="Progress meter showing ability to build interactive applications"/>
                                <h5>Interactive Web Apps</h5>

                            </div>
                        </Carousel>

                    </div>
                    </Col>
                </Row>

            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
    )
}