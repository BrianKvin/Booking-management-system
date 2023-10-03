import axios from "axios";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Form, Button } from "react-bootstrap";
// import Button from 'react-bootstrap/Button'

import useAuth from "../../../hooks/useAuth";
import FormContainer from "./FormContainer";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const { auth, physios, services } = useAuth();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      date: "",
      time: "",
      service: "",
      doctor: "",
    },
  });

  const { register, handleSubmit, control } = form;

  const onSubmit = (data) => {
    const booking = {
      physio_id: parseInt(data.doctor),
      resrv_date: data.date,
      resrv_time: data.time,
      service_id: parseInt(data.service),
      patient_id: auth.patient.id,
    };

    const postBooking = async () => {
      try {
        await axios.post("http://127.0.0.1:8000/api/booking/", booking, {
          headers: { "Content-Type": "application/json" },
        });

        navigate("/home");
      } catch (error) {
        console.log(error);
      }
    };

    postBooking();
  };

  return (
    <FormContainer>
      <h2>Book a Session</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="rsrv date">
          <Form.Label>Book a Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter date of birth"
            {...register("date")}
            // isInvalid={!!errors.dob}
          />
          {/* <Form.Control.Feedback type="invalid">
            {errors.dob}
          </Form.Control.Feedback> */}
        </Form.Group>

        <Form.Group controlId="gender">
          <Form.Label>Schedule time</Form.Label>
          <Form.Select placeholder="Select Gender" {...register("time")}>
            <option>Select Time</option>
            <option value="one">8 - 9am</option>
            <option value="two">9 - 10am</option>
            <option value="three">10 - 11am</option>
            <option value="four">11 - 12pm</option>
            <option value="five">12 - 1pm</option>
            <option value="six">2 - 3pm</option>
            <option value="seven">3 - 4pm</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>Service</Form.Label>
          <Form.Select placeholder="Select a Service" {...register("service")}>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.service}
              </option>
            ))}
          </Form.Select>
          {/* <div className="red">{errors.location}</div> */}
        </Form.Group>

        <Form.Group controlId="seeking">
          <Form.Label>Your Choice</Form.Label>
          <Form.Select
            type="text"
            placeholder="Enter Seeking"
            {...register("doctor")}
          >
            {physios.map((physio) => (
              <option key={physio.id} value={physio.id}>
                {physio.user.first_name} {physio.user.last_name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button type="submit" className="my-2" variant="primary">
          Continue
        </Button>
      </form>

      <DevTool control={control} />
    </FormContainer>
  );
};

export default BookingForm;
