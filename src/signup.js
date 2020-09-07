import React, {Component} from 'react';
// import usericon from '../icon/user.svg'
// import '../css/SignUpForm.css'

export default class SignUpForm extends Component {
  state = {
    // email: '',
    // username: '',
    // password1: '',
    // password2: '',
    // gender: '',
    // age: '',

    // 불일치, 중복확인 메세지
    password_message: '비밀번호는 문자,숫자,특수문자를 포함하여 8~16자로 입력해주세요.',
    password_OK: false,
    email_check_message: '',
    email_OK: false,
    username_check_message: '',
    username_OK: false,
  };

  /* email 체크
     * 1. 이메일 형식에 맞는지
     * 2. 중복 확인 */
  check_email = () => {
    var email_value = document.getElementsByClassName ('input_email')[0].value;
    this.check_usableEmail (email_value);
  };

  check_usableEmail = value => {
    var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

    if (!reg_email.test (value)) {
      this.setState ({
        email_check_message: '사용할 수 없는 이메일형식 입니다.',
        email_OK: false,
      });
    } else if (false) {
      // 중복 확인 -> 아직X
      this.setState ({
        email_check_message: '이미 존재하는 이메일 입니다.',
        email_OK: false,
      });
    } else {
      this.setState ({
        email_check_message: '사용 가능한 이메일입니다.',
        email_OK: true,
      });
    }
  };

  /* username 체크
     * 1. 공백 체크
     * 2. 길이 체크 ( 한글1-10자 영문 및 숫자 2-20자 )
     * 3. 특수문자 체크
     * 4. 중복 확인 */
  check_username = () => {
    var username_value = document.getElementsByClassName ('input_username')[0]
      .value;
    console.log (username_value);
    this.check_usableUsername (username_value);
  };

  check_usableUsername = value => {
    var length_username = 0;
    var special_of_username = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

    //한글, 영문 길이 2,1로 바꾸기
    for (var i = 0; i < value.length; i++) {
      //한글은 2, 영문은 1로 치환
      var nick = value.charAt (i);
      if (escape (nick).length > 4) {
        length_username += 2;
      } else {
        length_username += 1;
      }
    }
    if (value.search (/\s/) !== -1) {
      this.setState ({
        username_check_message: '사용자 이름에는 공백을 사용할 수 없습니다.',
        username_OK: false,
      });
    } else if (length_username < 2 || length_username > 20) {
      this.setState ({
        username_check_message: '사용 가능한 사용자 이름은 한글1-10자 영문 및 숫자 2-20자 입니다.',
        username_OK: false,
      });
    } else if (special_of_username.test (value)) {
      this.setState ({
        username_check_message: '사용자 이름은 특수문자를 사용할 수 없습니다.',
        username_OK: false,
      });
    } else if (false) {
      // 중복 확인 -> 아직 X
      this.setState ({
        username_check_message: '이미 존재하는 사용자 이름입니다.',
        username_OK: false,
      });
    } else {
      this.setState ({
        username_check_message: '사용 가능한 사용자 이름입니다.',
        username_OK: true,
      });
    }
  };

  check_password = () => {
    var pw_1 = document.getElementsByClassName ('input_password1')[0].value;
    var pw_2 = document.getElementsByClassName ('input_password2')[0].value;

    // 영문자, 특수문자, 숫자
    const reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

    if (!reg.test (pw_1)) {
      this.setState ({
        password_message: '비밀번호는 문자,숫자,특수문자를 포함하여 8~16자로 입력해주세요.',
        password_OK: false,
      });
    } else if (!(pw_1 === pw_2)) {
      this.setState ({
        password_message: '비밀번호가 일치하지 않습니다.',
        password_OK: false,
      });
    } else {
      this.setState ({
        password_message: '사용 가능한 비밀번호 입니다.',
        password_OK: true,
      });
    }
  };

  // python의 range함수와 동일한 역할 (->연령에 사용)
  range = (start, end) => {
    var arr = [];
    var length = end - start;
    for (var i = 0; i <= length; i++) {
      arr[i] = start;
      start++;
    }
    return arr;
  };
  make_ageArr = () => {
    const listItems = this.range (10, 100).map (age => (
      <option value={age} key={age.toString ()}>
        {age}
      </option>
    ));
    return listItems;
  };

  /* sign up 버튼
     * 1. email_OK,username_OK 확인
     * 2. password 확인
     * 3. 성별, 연령, 약관동의 선택했는지 확인
     */
  signup = () => {
    if (!this.state.email_OK) {
      alert ('email 중복확인을 해주세요.');
      console.log ('안녕');
    } else if (!this.state.username_OK) {
      alert ('username 중복확인을 해주세요.');
    } else if (!this.state.password_OK) {
      alert ('password를 확인해주세요.');
    }
  };

  render () {
    const {
      password_message,
      email_check_message,
      username_check_message,
    } = this.state;
    return (
      <form className="sign_form" action="">
        <div>
          <img src={usericon} alt="user_icon" />
          <input type="email" className="input_email" placeholder="EMAIL" />
          <button onClick={this.check_email}>
            중복확인
          </button>
          <span className="">{email_check_message}</span>
        </div>
        <div>
          <img src={usericon} alt="user_icon" />
          <input
            type="text"
            className="input_username"
            placeholder="USER NAME"
          />
          <button onClick={this.check_username}>
            중복확인
          </button>
          <span className="">{username_check_message}</span>
        </div>
        <div>
          <img src={usericon} alt="user_icon" />
          <input
            type="password"
            className="input_password1"
            placeholder="PASSWORD"
            onChange={this.check_password}
          />
          <div className="password_message">
            {password_message}
          </div>
          <img src={usericon} alt="user_icon" />
          <input
            type="password"
            className="input_password2"
            placeholder="Confirm PASSWORD"
            onChange={this.check_password}
          />
        </div>
        <div>
          <div>
            <span className="gender_title">성별</span>
            <input type="radio" name="gender" value="남자" />
            남성
            <input type="radio" name="gender" value="여자" />
            여성
          </div>

          <div className="age">
            <span className="age_title">연령</span>
            <select className="select_age">
              <this.make_ageArr />
            </select>
          </div>
        </div>
        <div className="term">
          <div className="term_content">
            <p>
              [제 1 조] 본 약관은 Likelion이 제공하는
              사이트의 모든 서비스에 대한 이용조건 및
              절차에 관한 기본적인 사항을 규정함을
              목적으로 합니다.
            </p>
            <p>
              [제 1 조] 본 약관은 Likelion이 제공하는
              사이트의 모든 서비스에 대한 이용조건 및
              절차에 관한 기본적인 사항을 규정함을
              목적으로 합니다.
            </p>
          </div>
          <label>
            <input type="checkbox" className="checkbox_agree" value="agree" />
            <span>약관에 동의 합니다.</span>
          </label>
        </div>

        <button className="SignUp-Btn" onClick={this.signup}>
          Sign Up
        </button>
      </form>
    );
  }
}
