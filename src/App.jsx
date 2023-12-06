import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Row, Col, Card, Button } from 'react-bootstrap';
import { DiGoogleAnalytics } from "react-icons/di";

function App() {


  return (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">
              <DiGoogleAnalytics size={55}/>{' '}
              Estudo React-GA (Google Analytics)
            </Navbar.Brand>
          </Container>
        </Navbar>
        <br />
        <Container >
          <Row md={10}>
            <Col>
              <Card style={{ width: '18rem', height: '10rem' }}>
                <Card.Body>
                  <Card.Title>Opção 1</Card.Title>
                  <Card.Text>
                    Opção 1 (Me escolhe ai vai!)
                  </Card.Text>
                  <Button variant="primary">Me escolher!</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem', height: '10rem' }}>
                <Card.Body>
                  <Card.Title>Opção 2</Card.Title>
                  <Card.Text>
                    Opção 2 (Posso ser melhor!)
                  </Card.Text>
                  <Button variant="primary">Me escolher!</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    </>
  )
}

export default App
