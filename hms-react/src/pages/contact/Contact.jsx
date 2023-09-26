import { Form } from "react-bootstrap";
import "./Contact.css";
import Button from "react-bootstrap/Button";

const Contact = () => {
  return (
    <Form>
      <h1>
        Contact <span>Here</span>
      </h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Message</Form.Label>
        <Form.Control
          name="message"
          id=""
          as="textarea"
          rows={6}
          placeholder="Type here..."
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" size="sm" active>
        Send
      </Button>
    </Form>
  );
};

export default Contact;
