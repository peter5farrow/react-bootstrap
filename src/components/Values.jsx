import { Button, Card, Container, Row, Col } from "react-bootstrap";

function Value({ title, description, action, icon }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
          <br />
          {icon}
        </Card.Text>
        <Button className="pe-2" variant="primary">
          {action}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default function Values({ values }) {
  return (
    <Container>
      <Row key="values">
        {values.map(({ title, description, action, icon }, index) => (
          <Col key={index}>
            <Value
              title={title}
              description={description}
              action={action}
              icon={icon}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
