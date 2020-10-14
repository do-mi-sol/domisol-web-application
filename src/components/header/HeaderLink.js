import React, { Component } from "react";
import { Container } from "@material-ui/core";
import { Navbar, Nav, Form } from "react-bootstrap";

import DMSButton from "../customs/DMSButton";

export default class HeaderLink extends Component{
  logout = ()=>{
    localStorage.removeItem("token")
    alert("로그아웃 되었습니다.")
    window.location.replace('/')
  }
  render(){
  const token = localStorage.getItem("token")

    return (
      <Navbar variant="light" style={{ backgroundColor: "white", padding: 30 }}>
        <Nav>
          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="/board">BOARD</Nav.Link>
          <Nav.Link href="/signup"></Nav.Link>
        </Nav>
        <Form>
          <Container>
            {(token==null)&&(<DMSButton children="로그인" href="/login" />)}
            {(token!=null)&&(<DMSButton children="로그아웃" onClick={this.logout}/>)}
          </Container>
        </Form>
      </Navbar>
    );
  }

}
