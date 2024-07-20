import { Container, Row, Col } from "react-bootstrap";

export default function Hero({ title, lead }) {
  return (
    <Container className="text-center py-5">
      <Row className="py-lg-5">
        <Col lg="6" md="8" className="mx-auto">
          <section>
            <h1>{title}</h1>
            <p>{lead}</p>
          </section>
        </Col>
      </Row>
    </Container>
  );
}
