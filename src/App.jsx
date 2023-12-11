import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Row, Col, Card, Button } from 'react-bootstrap';
import { DiGoogleAnalytics } from "react-icons/di";
import { useEffect } from 'react';
import ReactGA from 'react-ga4';

/**
 * Inicializando monitoramento do Google Analytics
 */
const TRACKING_ID = "G-HTKJVYHNC1";

ReactGA.initialize(TRACKING_ID);

function App() {

  /**
   * Sem interação, apenas verifica que entrou nesta página
   */
  useEffect(() => {
    // Send pageview with a custom path
    ReactGA.send({ hitType: "pageview", page: "/", title: "Acesso a página principal da aplicação" });
  }, []);

  /**
   * Monitorando diferentes eventos com Google Analytics....
   */
  const handleSelectCard = (option) => {
    if(option === 1) {
      ReactGA.event({
        category: 'option 1',
        action: 'test action',
        label: 'test label'
      });
    } else {
      ReactGA.event({
        category: 'option 2',
        action: 'test action 2',
        label: 'test label 2'
      });
    }
  }

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
                  <Button variant="primary" onClick={() => handleSelectCard(1)}>Me escolher!</Button>
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
                  <Button variant="primary" onClick={() => handleSelectCard(2)}>Me escolher!</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    </>
  )
}

export default App
