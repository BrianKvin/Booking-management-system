import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const TreatmentForm = () => {
  const { patientId } = useParams();
  const { auth, bookingId, bookings } = useAuth();
  const navigate = useNavigate();

  const appointment = bookings.find((booking) => booking.id === bookingId);

  const form = useForm({
    defaultValues: {
      date: "",
      prescription: "",
      treatment: "",
    },
  });

  const { register, handleSubmit } = form;

  const updatedBook = {
    resrv_date: appointment.resrv_date,
    resrv_time: appointment.resrv_time,
    payment: appointment.payment,
    status: "seen",
    patient_id: appointment.patient_id,
    physio_id: appointment.physio_id,
    service_id: appointment.service_id,
  };

  const onSubmit = (data) => {
    const treatment = {
      treatment_date: data.date,
      patient_id: parseInt(patientId),
      prescription: data.prescription,
      physio_id: auth.physio.id,
      treatment: appointment.service.service,
    };

    const postTreatment = async () => {
      try {
        await axios.post("http://127.0.0.1:8000/api/treatment/", treatment);

        await axios.put(
          `http://127.0.0.1:8000/api/booking/${bookingId}/`,
          updatedBook
        );

        toast.success("treatment complete");
        navigate("/home");
      } catch (error) {
        console.log(error.response.status);
        navigate("/home");
      }
    };

    postTreatment();
  };

  return (
    <>
      <h2>Treatment Form</h2>
      <Form>
        <Form.Group controlId="treatment">
          <Form.Label>Treatment</Form.Label>
          <Form.Control
            disabled
            placeholder={appointment.service.service}
            {...register("treatment")}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="date">
          <Form.Label>Seen Patient On</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter date of birth"
            {...register("date")}
          />
        </Form.Group>

        <Form.Group controlId="prescription">
          <Form.Label>Prescription</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Add prescription"
            {...register("prescription")}
          ></Form.Control>
        </Form.Group>

        <Button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          className="my-2"
          variant="primary"
        >
          Continue
        </Button>
      </Form>
    </>
  );
};

export default TreatmentForm;
