import * as React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

/* children is a special prop that holds all the children components and allows
us to render children components inside the parent component.
ex:
function ReactComponent(){
  return(
    <MainLayout>
      <h1>Home Page</h1>
    </MainLayout>
  )
}
 */

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home">Recipe-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Button variant="outline-success" className="mr-2">
              Sign In
            </Button>
            <Button variant="success">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid className="pt-5 pt-md-4 pt-lg-5">
        <Container fluid className="pt-4 pt-md-3 pt-lg-4">
          <div className="rounded">{children}</div>
        </Container>
      </Container>
    </>
  );
}