import { useState } from "react";
import "./Doctors.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import doctor1 from "../../assets/images/doctor1";
// import doctor2 from "../../assets/images/doctor2";
// import doctor3 from "../../assets/images/doctor3";

const Doctors = () => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      title: "Doctor Title",
      text: "Doctor Qualification",
      image: "/doctor1",
    },
    {
      id: 2,
      title: "Doctor Title 2",
      text: "Doctor Qualification 2.",
      image: "/doctor2",
    },
    {
      id: 3,
      title: "Doctor Title 3",
      text: "Doctor qualification 3.",
      image: "/doctor3",
    },
  ]);

  // Function to add a new Doctor's card
  const addDoctor = () => {
    const newDoctor = {
      id: doctors.length + 1,
      title: "New Card Title",
      text: "Some quick example text for the new card.",
      image: "",
    };

    setDoctors([...doctors, newDoctor]);
  };

  return (
    <div>
      <div className="doctors-container" style={{ display: "flex" }}>
        {doctors.map((doctor) => (
          <Card className="doctor" style={{ width: "18rem" }} key={doctor.id}>
            <Card.Img className="img" variant="top" src={"/doctor1"} />
            <Card.Body>
              <Card.Title>{doctor.title}</Card.Title>
              <Card.Text>{doctor.text}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Button
        className="button"
        variant="primary"
        size="sm"
        onClick={addDoctor}
        active
      >
        Add Doctor
      </Button>
    </div>
  );
};

export default Doctors;
