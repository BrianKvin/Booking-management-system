import axios from "axios";
import { useEffect } from "react";

import useAuth from "../../hooks/useAuth";
import DoctorView from "./DoctorView";
import PatientView from "./PatientView";

const Home = () => {
  const { auth, setBookings } = useAuth();

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

    fetchBookings();
  }, [auth, setBookings]);

  return auth.role === "patient" ? <PatientView /> : <DoctorView />;
};

export default Home;
