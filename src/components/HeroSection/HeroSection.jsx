import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import HeroImg from '../../images/hero-img1.png'
import './HeroSection.css';

const HeroSection = () => {
    return <section>
        <Container>
            <Row className='align-items-center'>
                <Col lg="6" md="6" className='text-center text-lg-start'>
                    <div className="hero-content">
                        <h2>
                            Anytime Anywhere <span className='text-success'>Learn</span> on your Suitable Schedule
                        </h2>
                        <p>
                        Unlock limitless learning opportunities with our educational website, where knowledge knows no bounds. Access courses and resources anytime, anywhere, empowering you to learn at your own pace and convenience. Join our community and embark on a journey of lifelong learning, enriching your mind from the comfort of your own space.
                        </p>
                        <div className="search">
                            <Form
                                className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </div>
                    </div>
                </Col>
                <Col lg="6" md="6" className="hero-img">
                    <img src={HeroImg} alt="hero-img" className="w-100 img-fluid rounded" />
                </Col>
            </Row>
        </Container>

    </section>
};

export default HeroSection;