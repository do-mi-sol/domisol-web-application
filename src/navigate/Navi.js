import React from "react"
import "../css/Nav.css"
import { Navbar, Nav, Form, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

function Navigation() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">XD</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">끝내고 싶다..썸</Nav.Link>
        <Nav.Link href="#features">잘하고싶다..연애</Nav.Link>
        <Nav.Link href="#pricing">etc..</Nav.Link>
      </Nav>

      <Form inline>
        <Button variant="light">로그인</Button>
        {"    "}

        <Button variant="warning">회원가입</Button>
      </Form>
    </Navbar>
  )
}
export default Navigation
