import Home from "../pages/home/Home";
import Layout from "../pages/layout/Layout";
import Services from "../pages/services/Services";
import Contact from "../pages/contact/Contact";
import Doctors from "../pages/doctors/Doctors";
import DoctorDetails from "../pages/doctorDetails/DoctorDetails";
import Landing from "../pages/landingPage/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/loginSignup/Login";
import Register from "../pages/register/Register";
import BookingForm from "../pages/forms/bookingForms/BookingForm";
import BillingForm from "../pages/forms/billingForm/billingForm";
import Treatment from "../pages/treatment/Treatment";
import Reports from "../pages/reports/Reports";
import MyAppointments from "../pages/reports/MyAppointments";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home/doctors" element={<Doctors />} />
          <Route path="/home/doctors/:id" element={<DoctorDetails />} />
          <Route path="/home/treatment/:patientId" element={<Treatment />} />
          <Route path="/home/booking" element={<BookingForm />} />
          <Route path="/home/billing/:bookingId" element={<BillingForm />} />
          <Route path="/home/services" element={<Services />} />
          <Route path="/home/reports" element={<Reports />} />

          <Route path="/home/reports" element={<Reports />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
