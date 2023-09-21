import Home from "../pages/home/Home";
import Layout from "../pages/layout/Layout";
import Services from "../pages/services/Services";
import Contact from "../pages/contact/Contact";
import Doctors from "../pages/doctors/Doctors";
import DoctorDetails from "../pages/doctorDetails/DoctorDetails";
import Landing from "../pages/landingPage/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../pages/register/Register";
import Login from "../pages/loginSignup/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home/doctors" element={<Doctors />} />
          <Route path="/home/doctors/:id" element={<DoctorDetails />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
