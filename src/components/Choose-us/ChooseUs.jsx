import { Col, Container, Row } from 'react-bootstrap';
import chooseImg from '../../images/why-choose-us.png'
import './ChooseUs.css'
import Features from '../Features/Features';

const ChooseUs = () => {
return <section>
        <>
        <Container>
            <Row className='align-items-center'>
                <Col lg='6' md='6' className='text-center text-lg-start'>
                    <div className="choose-content pr-sm-0 pr-5">
                        <h2 className='choose-us'>Why Choose Us</h2>
                        <p>Choose Education for a transformative learning experience. Our commitment to educational excellence is reflected in our curated content, interactive lessons, and expertly crafted courses. What sets us apart is our dedication to empowering learners of all ages, ensuring that education becomes an engaging and personalized journey. With a team of passionate educators and cutting-edge technology, we provide a platform where curiosity thrives, skills are honed, and knowledge becomes a lifelong companion.</p>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className="choose-img">
                            <img src={chooseImg} alt="" className="w-100" /> 
                    </div>
                </Col>
            </Row>  
        </Container>
        <Features/>
        </>
    </section>
};

export default ChooseUs;