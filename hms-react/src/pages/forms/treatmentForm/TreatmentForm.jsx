import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../bookingForms/FormContainer";

import { useState } from "react";

const TreatmentForm = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormContainer>
      <h2>Treatment Form</h2>
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group controlId="rsrv-date">
              <Form.Label>Seen Patient On</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter date of birth"
                value={form.dob}
                onChange={(e) => setField("dob", e.target.value)}
                isInvalid={!!errors.dob}
              />
              <Form.Control.Feedback type="invalid">
                {errors.dob}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="session-time">
              <Form.Label>Session Time</Form.Label>
              <Form.Select placeholder="Select Time">
                <option>Select Time</option>
                <option value="M">Morning</option>
                <option value="E">Evening</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="service">
              <Form.Label>Service</Form.Label>
              <Form.Select placeholder="Select a Service">
                <option>Counseling</option>
                <option>Therapy</option>
                <option>Physiology</option>
              </Form.Select>
              <div className="red">{errors.location}</div>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="comment">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                type="textarea"
                placeholder="Doctor's comment"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="submit">
              <Button
                type="submit"
                onClick={handleSubmit}
                className="my-2"
                variant="primary"
              >
                Continue
              </Button>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
};

export default TreatmentForm;
