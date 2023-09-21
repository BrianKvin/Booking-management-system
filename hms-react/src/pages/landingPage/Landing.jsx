import headerimg from '../../assets/images/headerimg.png'
import './Landing.css'
import Navbar from '../../components/navbar/Navbar'


const Landing = () => {
  return (
    <header>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <h5>We Provide All Therapy Solutions</h5>
            <h2>Protect Your Mental and Physical Condition</h2>
            <button><a href='#'>Login</a></button>
          </div>
          <div className='col-lg-6 col-md-6'>
            <div className="header-box">
              <img src={headerimg} />
              {/* <FontAwesomeIcon icon={faSquare} /> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Landing