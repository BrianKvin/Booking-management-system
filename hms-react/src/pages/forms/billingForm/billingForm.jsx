import { Form, Button, Col, Row } from "react-bootstrap";
import FormContainer from "../bookingForms/FormContainer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const BillingForm = () => {
  const navigate = useNavigate();
  const { bookingId } = useParams();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/api/booking/${bookingId}/`
        );

        setBooking(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooking();
  }, [bookingId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("payment made successful");
    navigate("/home");

    // const updateBooking = {
    //   id: parseInt(bookingId),
    //   physio_id: booking?.physio.id,
    //   resrv_date: booking?.resrv_date,
    //   resrv_time: booking?.resrv_time,
    //   service_id: booking?.service?.id,
    //   patient_id: booking?.patient?.id,
    //   payment: "True",
    // };

    // const updateBooking = { ...booking, payment: "True" };
    // setBooking(updateBooking);

    // const postPayment = async () => {
    //   try {
    //     const res = await axios.put(
    //       `http://127.0.0.1:8000/api/booking/${bookingId}/`,
    //       updateBooking
    //     );

    //     console.log(res);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // postPayment();
  };

  return (
    <FormContainer>
      <h2>Confirm booking and make payment</h2>
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group controlId="patient">
              <Form.Label>Patient</Form.Label>
              <Form.Control
                placeholder={`${booking?.patient?.user?.first_name} ${booking?.patient?.user?.last_name}`}
              ></Form.Control>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="physio">
              <Form.Label>physio</Form.Label>
              <Form.Control
                placeholder={`${booking?.physio?.user?.first_name} ${booking?.physio?.user?.last_name}`}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control placeholder={booking?.resrv_date}></Form.Control>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="time">
              <Form.Label>Time</Form.Label>
              <Form.Control placeholder={booking?.resrv_time}></Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="service">
              <Form.Label>Service</Form.Label>
              <Form.Control
                placeholder={booking?.service?.service}
              ></Form.Control>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="cost">
              <Form.Label>Cost</Form.Label>
              <Form.Control placeholder={booking?.service?.cost}></Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Button
          type="submit"
          onClick={handleSubmit}
          className="my-2"
          variant="primary"
        >
          Make Payment
        </Button>
      </Form>
    </FormContainer>
  );
};

export default BillingForm;
