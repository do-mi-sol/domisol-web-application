import React, { Component } from "react";
import DMSInput from "../../components/customs/DMSInput";
import Logo from "../../assets/images/Logo.jpg";
import { FormControl } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/css/Login.css";

export default class Login extends Component {
  state = {
    idx: null,
    id: "",
    password: "",
    isLogin: null,
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
        <div>
          <p></p>
          {/* <button type="submit">로그인</button> */}
          <button className="button1">로그인</button>

          {/* 회원가입 버튼 클릭하면 /SignUp 페이지로 가게 만들기 */}
          {/* <button onClick={() => this.props._("/signup")}> 회원가입 </button> */}

          {/* 우선은 페이지 이동없이 보여지는 버튼만 만들어둘게요 -> 동적 구현은 추후에 */}
          <button className="button2">회원가입</button>

          {/* {아이디와 비밀번호 찾기 버튼 만들기}
            <button type="submit">아이디 찾기</button>
            <button type="submit">비밀번호 찾기</button> */}

          {/* 디자인에 입각해서 버튼말고 텍스트 효과로해서 만들어둘게요 -> 추후 클릭효과 수정하기 */}

          <div class="array">
            <span className="search-text">아이디 찾기</span> <p></p>{" "}
            <span className="search-text">비밀번호 찾기</span>
          </div>
        </div>
      </div>
    );
  }
}
