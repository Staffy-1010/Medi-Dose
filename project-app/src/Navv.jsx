import React from 'react'
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap'

function Navv() {
    return (
        <div>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">MEDI-DOSE</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About</Nav.Link>
          <Nav.Link href="#pricing">Medicines</Nav.Link>
        </Nav>
      </Navbar>
        </div>
    )
}

export default Navv
