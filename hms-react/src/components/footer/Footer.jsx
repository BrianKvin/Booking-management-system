import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import facebook from '../../assets/images/download.png'
import twitter from '../../assets/images/download (1).png'
import instagram from '../../assets/images/download (2).png'
import linkedin from '../../assets/images/download (3).png'
import logo from '../../assets/one-medical.svg'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <img src={logo} className="footer.logo"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dicta cumque voluptatibus fugiat! Reprehenderit, numquam! Excepturi ab maiores repudiandae ratione.</p>
                    <div  className="footer-contact">
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className="footer-text">
                        <h6>Contact Us</h6>
                        <h4>(888) 4421-1238-32</h4>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">Physiology Care</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Booking</a></li>
                        <li><a href="#">Faqs</a></li>
                        <li><a href="#">Our Doctors</a></li>
                        <li><a href="#">Services</a></li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                <h2>Services</h2>
                    <ul>
                        <li><a href="#">Physiology Care</a></li>
                        <li><a href="#">Screening</a></li>
                        <li><a href="#">Therapy</a></li>
                        <li><a href="#">Consultation</a></li>
                        <li><a href="#">Diagnosis</a></li>
                        <li><a href="#">Post care services</a></li>
                        <li><a href="#">Services</a></li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h2>Contact Us</h2>
                    <form>
                        <input type="email" />
                        <button type="submit">Send an email</button>
                    </form>
                    <ul className="social">
                        <li><a href="#"><img src={facebook} /></a></li>
                        <li><a href="#"><img src={twitter} /></a></li>
                        <li><a href="#"><img src={instagram} /></a></li>
                        <li><a href="#"><img src={linkedin} /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer