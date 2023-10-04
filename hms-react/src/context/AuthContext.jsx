import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [physios, setPhysios] = useState([]);
  const [patients, setPatients] = useState([]);
  const [services, setServices] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [treatments, setTreatments] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        physios,
        setPhysios,
        patients,
        setPatients,
        services,
        setServices,
        bookings,
        setBookings,
        treatments,
        setTreatments,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
