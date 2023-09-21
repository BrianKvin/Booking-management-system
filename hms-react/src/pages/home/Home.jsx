import headerimg from '../../assets/images/headerimg.png'
import './Home.css'


const Home = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <h5>We Provide All Therapy Solutions</h5>
            <h2>Protect Your Mental and Physical Condition</h2>
            <button><a href='#'>Read More</a></button>
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

export default Home