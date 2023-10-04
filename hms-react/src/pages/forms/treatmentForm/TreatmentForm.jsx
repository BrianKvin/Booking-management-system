import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const TreatmentForm = () => {
  const { patientId } = useParams();
  const { auth, services } = useAuth();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      date: "",
      prescription: "",
      treatment: "",
    },
  });

  const { register, handleSubmit } = form;

  const onSubmit = (data) => {
    const treatment = {
      treatment_date: data.date,
      patient_id: parseInt(patientId),
      prescription: data.prescription,
      physio_id: auth.physio.id,
      treatment: data.treatment,
    };

    const postTreatment = async () => {
      try {
        await axios.post("http://127.0.0.1:8000/api/treatment/", treatment);

        navigate("/home");
      } catch (error) {
        console.log(error);
      }
    };

    postTreatment();
  };

  return (
    <>
      <h2>Treatment Form</h2>
      <Form>
        <Form.Group controlId="date">
          <Form.Label>Seen Patient On</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter date of birth"
            {...register("date")}
          />
        </Form.Group>

        <Form.Group controlId="treatment">
          <Form.Label>Treatment</Form.Label>
          <Form.Select
            placeholder="Select a treatment"
            {...register("treatment")}
          >
            {services.map((service) => (
              <option key={service.id} value={service.service}>
                {service.service}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="prescription">
          <Form.Label>Prescription</Form.Label>
          <Form.Control
            type="text"
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
