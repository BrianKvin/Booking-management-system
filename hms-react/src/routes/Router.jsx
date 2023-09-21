import Home from '../pages/home/Home'
import Layout from '../pages/layout/Layout'
import Services from '../pages/services/Services'
import LoginSignup from '../pages/loginSignup/LoginSignup'
import Contact from '../pages/contact/Contact'
import Doctors from '../pages/doctors/Doctors'
import DoctorDetails from '../pages/doctorDetails/DoctorDetails'
import Landing from '../pages/landingPage/LandingPage'
import { Routes, Route } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />}></Route>
      <Route path='/home' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/home/doctors' element={<Doctors />} />
        <Route path='/home/doctors/:id' element={<DoctorDetails />} />
      </Route>
      <Route path='/loginSignup' element={<LoginSignup />}></Route>
      <Route path='/register' element={<LoginSignup />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/services' element={<Services />}></Route>
    </Routes>
  )
}

export default Router