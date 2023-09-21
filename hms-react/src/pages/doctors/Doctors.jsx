// import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import './Barner'
import './Doctors.css'

const Doctors = () => {
  return (
    <>

        <section className="physiology-details-sec">
            <Container>
                <Row>
                    <Col md={7} lg={8}>
                        <div className="single-physiology-details">
                            <h2>Dr. Jane Doe <span>(DMD, MS, DICOI)</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy.</p>
                        </div>
                        <div className="physiology-award">
                            <h3>Physiologist</h3>
                            <ul className="p-0">
                                <li>American Physiology Association</li>
                                <li>Academy of General Therapy</li>
                                <li>Carolina Physiology Society</li>
                                <li>Academy of General Physiology</li>
                                <li>American Association of Physiologists</li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={5} lg={4}>
                        <div className="physiology-profile text-center">
                            <div className="profile-img"></div>
                            <p>Name: <strong>Jane Doe</strong></p>
                            <p>Specialization: <strong>Physiology</strong></p>
                            <p>Phone: <strong>1-866-764-5387</strong></p>
                            <div className="doctors-social">
                                {/* <a href=".#"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href=".#"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href=".#"><FontAwesomeIcon icon={faLinkedin} /></a> */}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="pb-5">
        <Container>
            <Row className="align-items-center">
                <Col lg={6}>
                    <div className="achivement-img-bg"></div>
                </Col>
                <Col lg={6}>
                    <div className="expertpPhysiology-txt mt-5 mt-lg-0">
                        <h2>Experienced Physiologist</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, iure?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iure tempora impedit eveniet obcaecati a quae beatae natus exercitationem. Architecto!</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Doctors