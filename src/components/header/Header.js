import { Container } from "@material-ui/core";
import React, { Component } from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";

import DMSButton from "../customs/DMSButton";

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">
          <img
            src={require("../../assets/images/Logo2.png")}
            alt="logo2"
            width="40"
          ></img>
        </Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link href="/">홈</Nav.Link>
          <Nav.Link href="/board">게시판</Nav.Link>
          <Nav.Link href="/signup">회원가입</Nav.Link>
        </Nav>
        <Form>
          <Container>
            <DMSButton children="로그인" href="/login" />
          </Container>

          {/* <Button variant="light">로그인</Button>
          <Button variant="warning">회원가입</Button> */}
        </Form>
      </Navbar>
    );
  }
}
