import React, { Component } from "react";

export default class SignUp extends Component {
  state = {
    email: "",
    name: "",
    password: "",
    checkpassword: "",
  };

  render() {
    const { email, name, password, checkpassword } = this.state;

    return (
      <form className="">
        <div>
          <input type="email" placeholder="EMAIL" onChange={email} />
          <button>중복확인</button>
        </div>

        <div>
          <input
            type="text"
            className=""
            placeholder="USER NAME"
            onChange={name}
          />
          <button>중복확인</button>
        </div>

        <div>
          <input
            type="password"
            className=""
            placeholder="PASSWORD"
            onChange={password}
          />
        </div>

        <div>
          <input
            type="password"
            className=""
            placeholder="Confirm PASSWORD"
            onChange={checkpassword}
          />
        </div>

        <div>
          <div>
            <span className="">성별</span>
            <input type="radio" name="gender" value="남자" />
            남성
            <input type="radio" name="gender" value="여자" />
            여성
          </div>

          <div className="">
            <span className="">연령</span>
            <select className=""></select>
          </div>
        </div>

        <button className="">Sign Up</button>
      </form>
    );
  }
}
