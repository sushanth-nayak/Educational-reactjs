import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import courseImg1 from "../../images/web-design.png";
import courseImg2 from "../../images/graphics-design.png";
import courseImg3 from "../../images/ui-ux.png";
import CourseCard from "./CoursesCard";
import './Courses.css'

const coursesData = [
    {
      id: "01",
      title: "Web Design BootCamp-2022 for Beginners",
      lesson: 12,
      students: 1.5,
      rating: 8.9,
      imgUrl: courseImg1,
    },
  
    {
      id: "02",
      title: "Professional Graphics Design, PhotoShop",
      lesson: 12,
      students: 2.5,
      rating: 6.9,
      imgUrl: courseImg2,
    },
  
    {
      id: "03",
      title: "UI/UX BootCamp for Beginners in 2022",
      lesson: 12,
      students: 1.2,
      rating: 9.9,
      imgUrl: courseImg3,
    },
  ];

const Courses = () => {
    return <section>
        <Container>
            <Row>
                <Col lg="12" className="mb-5 text-center text-lg-start">
                    <div className="course-top d-flex justify-content-center align-items-center">
                        <div className="course-top-left w-50">
                            <h2 className='our-popular-course'>Our Popular Courses</h2>
                            <p className='our-popular-course'>
                            Explore our Popular Courses section, where educational excellence meets the latest trends, ensuring an enriching and in-demand learning experience for every enthusiast.
                            </p>
                        </div>
                    </div>
                </Col>
                {coursesData.map((item) => (
                    <Col lg="4" md="6" sm="6">
                        <CourseCard key={item.id} item={item} />
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
    
};

export default Courses;