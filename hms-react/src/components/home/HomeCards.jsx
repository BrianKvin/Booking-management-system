import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

function HomeCards() {
  return (
    <Stack direction="horizontal" gap={3}>
      <div className="p-2">
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Header>Appointments</Card.Header>
          <Card.Body>
            <div className="d-flex justify-content-between">
              <i className="bi bi-calendar-day-fill"></i>
              <div>World</div>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="p-2">
        <Card border="secondary" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Secondary Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="p-2">
        <Card border="success" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Success Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Stack>
  );
}

export default HomeCards;
