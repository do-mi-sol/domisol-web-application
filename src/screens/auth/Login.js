import React, { Component } from "react";
import Logo from "../../assets/images/Logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../css/Login.css";
import Term from "./components/Term.js";

// export default class Login extends Component {
//   render() {
//     return (
//       <div>
//         <div>login</div>
//       </div>
//     );
//   }
// }

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idx: null,
      id: "",
      password: "",
      isLogin: null,
    };
  }

  //아이디 입력창 관리
  handleId = (e) => {
    this.setState({
      id: e.target.value,
    });
  };

  //패스워드 입력창 관리
  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  // //로그인버튼 클릭시 서버로 데이터 전송
  // handleSubmit = e => {
  //   e.preventDefault();

  //   const login_info = {
  //     method: "POST",
  //     body: JSON.stringify(this.state),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   };
  //   fetch("http://localhost:3000/login", login_info)
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(json => {
  //       //json형식 {idx: 8, id: "likelion", password: "2020likelion", success: true}
  //       if (json.success === true) {
  //         alert("로그인 되었습니다");
  //         // 서버로 부터 받은 JSON형태의 데이터를 로컬저장소에 우선 저장.
  //         window.localStorage.setItem('userInfo', JSON.stringify(json))
  //         //state에 유저정보를 저장.
  //         this.setState({
  //           idx: json.idx,
  //           name:json.name,
  //           email: json.email,
  //           gender: json.gender,
  //           age : json.age,
  //           isLogin: json.success
  //         });
  //         this.props._("/main")
  //       } else {
  //         alert("아이디 또는 비밀번호를 다시 확인해주세요.");
  //       }
  //     });
  // };

  render() {
    return (
      // <Router>
      <div class=" array">
        <form onSubmit={this.handleSubmit}>
          {/* 상단에 도미솔 로고디자인 삽입 */}
          <div>
            <img className="icon2" src={Logo} alt="profile image" />
          </div>

          {/* 아이디 입력창 만들기 */}
          <div>
            <FontAwesomeIcon className="icon" icon="smile" />

            {/* <span>ID</span> */}
            <input
              // placeholder="아이디를 입력해주세요."
              placeholder="ID"
              value={this.state.id}
              onChange={this.handleId}
              className="line"
            />
          </div>

          {/* 패스워드 입력창 만들기 */}
          <div>
            <FontAwesomeIcon className="icon" icon="smile" />

            {/* <span>PASSWORD</span> */}
            <input
              // placeholder="비밀번호를 입력해주세요."
              placeholder="PASSWORD"
              value={this.state.password}
              onChange={this.handlePassword}
              type="password"
              className="line"
            />
          </div>
          <div>
            {/* 하단에 로그인과 회원가입 버튼 만들기*/}

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
        </form>
      </div>
      // </Router>
    );
  }
}

export default Login;
