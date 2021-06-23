import { 
    Navbar, 
    Nav, 
    NavDropdown, 
    Button, 
    Form, 
    FormControl, 
    Container } from 'react-bootstrap';

const Navigation = () => {
    return(
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">OpenData</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <NavDropdown title="New" id="basic-nav-dropdown">
        <NavDropdown.Item href="/datapackage">Datapackage</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="View" id="basic-nav-dropdown">
        <NavDropdown.Item href="/package-catalog">Package Catalog</NavDropdown.Item>
        <NavDropdown.Item href="/dataset-catalog">Dataset Catalog</NavDropdown.Item>        
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-3" />
      <Button variant="outline-success" size='sm'>Search</Button>
    </Form>
    
  </Navbar.Collapse>
</Navbar>
    )

}
export default Navigation