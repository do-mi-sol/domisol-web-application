import React from "react";
import { Container } from "@material-ui/core";
import { Navbar, Nav, Form } from "react-bootstrap";

import DMSButton from "../customs/DMSButton";

const HeaderLink = () => {
  return (
    <Navbar variant="light" style={{ backgroundColor: "white", padding: 30 }}>
      <Nav>
        <Nav.Link href="/">HOME</Nav.Link>
        <Nav.Link href="/board">BOARD</Nav.Link>
        <Nav.Link href="/signup"></Nav.Link>
      </Nav>
      <Form>
        <Container>
          <DMSButton children="로그인" href="/login" />
        </Container>
      </Form>
    </Navbar>
    // <nav id="nav_wrap">
    //   <ul id="nav" className="nav">
    //     <li className="current">
    //       <a className="smoothscroll" href="/">
    //         Home
    //       </a>
    //     </li>
    //     <li>
    //       <a className="smoothscroll" href="/board">
    //         About
    //       </a>
    //     </li>
    //     <li>
    //       <a className="smoothscroll" href="/signup">
    //         Resume
    //       </a>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default HeaderLink;
