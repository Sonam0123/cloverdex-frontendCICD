import React, { useState } from 'react';
import { Navbar, NavbarBrand, Container, NavbarToggler, Collapse, NavbarNav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, DropdownDivider, Form, FormInput, Button } from 'react-bootstrap';
import './login.css';

const Home = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <h1>Hello from Home</h1>
      <Navbar expand="lg" bg="light">
        <Container fluid>
          <NavbarBrand href="#">Navbar</NavbarBrand>
          <NavbarToggler onClick={() => setVisible(!visible)} />
          <Collapse className="navbar-collapse" in={visible}>
            <NavbarNav>
              <NavItem>
                <NavLink href="#" active>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Link</NavLink>
              </NavItem>
              <Dropdown as={NavItem} variant="nav-item">
                <Dropdown.Toggle as={NavLink} variant="secondary">
                  Dropdown button
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <NavItem>
                <NavLink href="#" disabled>
                  Disabled
                </NavLink>
              </NavItem>
            </NavbarNav>
            <Form className="d-flex">
              <FormInput type="search" className="me-2" placeholder="Search" />
              <Button type="submit" variant="outline-success">
                Search
              </Button>
            </Form>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Home;
