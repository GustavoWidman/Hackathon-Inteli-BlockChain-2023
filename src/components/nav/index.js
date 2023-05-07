import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Navbarra() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className='mr-2'>Home</Navbar.Brand>
          <Nav className="me-left">
            <Nav.Link href="#home">sla</Nav.Link>
            <Nav.Link href="#features">slas</Nav.Link>
            <Nav.Link href="#pricing">Perfil</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
    </>
  );
}
