import axios from "axios";
import { useEffect } from "react";

import useAuth from "../../hooks/useAuth";
import DoctorView from "./DoctorView";
import PatientView from "./PatientView";

const Home = () => {
  const { auth, setBookings, setTreatments } = useAuth();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/booking/", {
          headers: { Authorization: `BEARER ${auth.accessToken}` },
        });

        setBookings(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchTreatments = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/treatment/", {
          headers: { Authorization: `BEARER ${auth.accessToken}` },
        });

        setTreatments(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBookings();
    fetchTreatments();
  }, [auth, setBookings, setTreatments]);

  return auth.role === "patient" ? <PatientView /> : <DoctorView />;
};

export default Home;
