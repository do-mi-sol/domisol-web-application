import React, { Component } from "react";
import DMSInput from "../../components/customs/DMSInput";
import DMSButton from "../../components/customs/DMSButton";
import Logo from "../../assets/images/Logo.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/css/Login.css";

export default class Login extends Component {
  state = {
    id: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { id, password } = this.state;
    return (
      <div class=" array">
        <div>
          <img className="icon2" src={Logo} alt="profile image" />
        </div>

        <div>
          <DMSInput
            value={id}
            label="ID"
            onChange={this.handleChange}
            variant="outlined"
          />
        </div>

        <div>
          <DMSInput
            value={password}
            label="Password"
            onChange={this.handleChange}
            variant="outlined"
          />
        </div>

        <div className="buttonContainer">
          <DMSButton
            className="button1"
            children="로그인"
            variant="contained"
            size="large"
          />
        </div>

        <div>
          {/* <DMSButton className="button1" children="회원가입" /> */}
          {/* <DMSButton className="button1" children="아이디 찾기" /> */}
          {/* <DMSButton className="button1" children="비밀번호 찾기" /> */}
        </div>
      </div>
    );
  }
}
