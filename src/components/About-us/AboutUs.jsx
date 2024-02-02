import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../../images/about-us.png'
import CountUp from 'react-countup';
import './AboutUs.css'

const AboutUs = () => {
    return <section id='about'>
        <Container>
            <Row className='align-items-center'>
                <Col lg='6' md='6'>
                    <div className="about-img">
                        <img src={aboutImg} alt="about-img" className='w-100 img-fluid' />
                    </div>
                </Col>
                <Col lg='6' md='6' className='text-center text-lg-start'>
                    <div className="about-content">
                        <h2>About Us</h2>
                        <p>Welcome to Education, where knowledge meets innovation. Committed to fostering a dynamic learning environment, we offer a diverse range of educational resources tailored to meet the needs of students, educators, and lifelong learners. From interactive courses to insightful articles, our platform is designed to inspire curiosity, ignite intellectual growth, and empower individuals on their educational journey.</p>

                        <div className="about-counter">
                            <div className=" d-flex gap-5 align-items-center">
                                <div className="single-counter">
                                    <span className="counter">
                                        <CountUp start={0} end={2562} duration={3} />
                                    </span>

                                    <p className="counter-title">Completed Projects</p>
                                </div>

                                <div className="single-counter">
                                    <span className="counter">
                                        <CountUp start={0} end={670} duration={3}  />
                                    </span>

                                    <p className="counter-title">Patient Around World</p>
                                </div>
                            </div>

                            <div className=" d-flex gap-5 align-items-center">
                                <div className="single-counter">
                                    <span className="counter">
                                        <CountUp start={0} end={24} duration={3} suffix="/-Lakhs" />
                                    </span>

                                    <p className="counter-title">Ideas Raised Funds</p>
                                </div>

                                <div className="single-counter">
                                    <span className="counter">
                                        <CountUp start={0} end={2400} duration={3}  />
                                    </span>

                                    <p className="counter-title">Categories Served</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
};

export default AboutUs;