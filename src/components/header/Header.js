import React, { Component } from "react"
import { Navbar, Nav, Form, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
// import "../css/Nav.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Header() {
//   return (
//     <Navbar bg="light" variant="light">
//       <Navbar.Brand href={Login}>XD</Navbar.Brand>
//       <Nav className="mr-auto">
//         <Nav.Link href={Login}>끝내고 싶다..썸</Nav.Link>
//         <Nav.Link href={Login}>잘하고싶다..연애</Nav.Link>
//         <Nav.Link href={Login}>etc..</Nav.Link>
//       </Nav>

//       {/* <Form inline>
//         <Button variant="light">로그인</Button>
//         {"    "}

//         <Button variant="warning">회원가입</Button>
//       </Form> */}
//     </Navbar>
//     <div>
//       <Link to="/">Home</Link>
//       <Link to="/login">login</Link>
//     </div>
//   );
// }
// export default Header;

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">XD</Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link href="/">끝내고 싶다..썸</Nav.Link>
          <Nav.Link href="/login">잘하고싶다..연애</Nav.Link>
          <Nav.Link href="/signup">etc..</Nav.Link>
        </Nav>
        <Form inline>
          <Button variant="light">로그인</Button>
          {"    "}

          <Button variant="warning">회원가입</Button>
        </Form>
      </Navbar>
    )
  }
}
