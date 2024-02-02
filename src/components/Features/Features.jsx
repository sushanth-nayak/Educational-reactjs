import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Features.css'

const FeatureData = [
    {
        title: "Quick Learning",
        desc: "Streamline your educational journey with concise lessons, instant feedback, and dynamic resources, ensuring that every moment spent here contributes to your intellectual growth.",
        icon: "ri-draft-line",
    },

    {
        title: "All Time Support",
        desc: "Our commitment to your success extends beyond the classroom with our 'All-Time Support'. Explore a wealth of resources, engage in discussions, and access expert guidance whenever you need it.",
        icon: "ri-discuss-line",
    },

    {
        title: "Certification",
        desc: "Elevate your achievements with our Certification, where successful completion of courses grants you recognized credentials. Showcase your newfound expertise and enhance your career.",
        icon: "ri-contacts-book-line",
    },
];
console.log(FeatureData)

const Features = () => {
    return (
        <section>
            <Container>
                <Row>
                    {FeatureData.map((item, index) => (
                        <Col lg="4" md="6" key={index}>
                            <div className="single-feature text-center px-4">
                                <h2 className="mb-3">
                                    <i className={item.icon}></i>
                                </h2>
                                <h6>{item.title}</h6>
                                <p>{item.desc}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Features;