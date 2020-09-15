import React, { Component } from "react";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import SelectAge from "../../components/signup/SelectAge";
import InputWithBtn from "../../components/signup/InputWithBtn";
import GenderRadio from "../../components/signup/GenderRadio";
import DMSInput from "../../components/customs/DMSInput";
import DMSButton from "../../components/customs/DMSButton";
import { Divider, Container, Grid } from "@material-ui/core";

import "../../assets/css/SignUp.css";
import Term from "../../components/signup/Term";

export default class SignUp extends Component {
  state = {
    id: "",
    name: "",
    password1: "",
    password2: "",
    email: "",
    gender: "",
    age: "",
    checkterm: "false",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };
  // SignUp button 클릭 함수
  clickSignUp = () => {
    console.log(this.state);
  };
  render() {
    const { id, name, password1, password2, email } = this.state;
    return (
      <div className="container">
        <Container maxWidth="xs" style={{ marginTop: 30, marginBottom: 20 }}>
          <img
            className="logo-icon"
            src={require("../../assets/images/Logo.jpg")}
            alt="logo"
          />
          <h3>회원가입</h3>

          <Divider />
        </Container>
        {/* ID */}
        <div>
          <InputWithBtn
            value={id}
            name="id"
            type="id"
            label="ID"
            onChange={this.handleChange}
          />
        </div>

        {/* NAME */}

        <div>
          <DMSInput
            value={name}
            name="name"
            type="text"
            label="NAME"
            onChange={this.handleChange}
            variant="outlined"
          />
        </div>

        {/* EMAIL */}
        <div>
          <DMSInput
            value={email}
            name="email"
            type="email"
            label="EMAIL"
            onChange={this.handleChange}
            variant="outlined"
          />
        </div>
        <div>
          <Grid
            container
            spacing={3}
            direction="row"
            alignItems="center"
            justify="space-between"
            style={{
              marginTop: 10,
              marginBottom: 10,
              width: 400,
            }}
          >
            <Grid item>
              <GenderRadio onChange={this.handleChange} />
              {/* <GenderRadio2 /> */}
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              light
              style={{ margin: 15 }}
            />
            <Grid item>
              <SelectAge age={this.age} handleChange={this.handleChange} />
            </Grid>
          </Grid>
        </div>
        <div className="term-container">
          <div className="term-content">
            <Term />
          </div>
          <label className="agree-container">
            <input
              type="checkbox"
              className="checkbox_agree"
              value={true}
              onChange={this.agree}
            />
            <span>약관에 동의 합니다.</span>
          </label>
        </div>
        <DMSButton
          className="signup-button"
          children="회원가입"
          variant="contained"
          size="large"
          width={400}
          color="#ffd400"
          margin={20}
          onClick={this.clickSignUp}
        />
      </div>
    );
  }
}
