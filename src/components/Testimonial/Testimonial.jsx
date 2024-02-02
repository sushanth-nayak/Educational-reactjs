import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import img from "../../images/testimonial01.png";
import './Testimonial.css'

const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
};

const Testimonial = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="6" md="6" sm="12" className="m-auto">
                        <div className="testimonial-img w-100">
                            <img src={img} alt="testimonial-img" className="img-fluid w-100" />
                        </div>
                    </Col>

                    <Col lg="6" md="6" sm="12" className="m-auto">
                        <div className="testimonial-wrapper d-flex justify-content-center align-items-center">
                            <div className="testimonial-content w-100">
                                <h2 className="mb-4">Our Students Voice</h2>

                                <Slider {...settings}>
                                    <div>
                                        <div className="single-testimonial">
                                            <h6 className="mb-3 fw-bold">
                                                Excellent course of materials
                                            </h6>
                                            <p>
                                            I've never been so engaged in my studies until I discovered Education. The interactive courses and personalized approach have truly transformed my learning experience.
                                            </p>

                                            <div className="student-info mt-4">
                                                <h6 className="fw-bold">Ramya</h6>
                                                <p>Mangalore,india</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="single-testimonial">
                                            <h6 className="mb-3 fw-bold">
                                               Well-structured contents
                                            </h6>
                                            <p>
                                            Thanks to Education, I was able to grasp complex concepts with ease. The well-structured content and supportive community made my learning journey enjoyable and fulfilling.
                                            </p>

                                            <div className="student-info mt-4">
                                                <h6 className="fw-bold">Suresh</h6>
                                                <p>Bangalore,india</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="single-testimonial">
                                            <h6 className="mb-3 fw-bold">
                                                Diverse range of courses
                                            </h6>
                                            <p>
                                            I can't recommend Education enough! The diverse range of courses, knowledgeable instructors, and user-friendly interface have helped me excel academically and professionally.
                                            </p>

                                            <div className="student-info mt-4">
                                                <h6 className="fw-bold">Mahesh</h6>
                                                <p>Mumbai,india</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Testimonial;