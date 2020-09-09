import React, {Component} from 'react'
import ProfileIcon from './icon/Profile.png'
import '../css/SignUp.css'
import Term from './components/Term.js'

export default class SignUp extends Component {
    state = {
        id: '',
        name: '',
        password1: '',
        password2: '',
        email: '',
        gender: '',
        age: '',
        checkterm: 'false',
    }

    range = (start, end) => {
        var arr = []
        var length = end - start
        for (var i = 0; i <= length; i++) {
            arr[i] = start
            start++
        }
        return arr
    }
    //age 만들기 위해 사용
    make_ageArr = () => {
        const listItems = this.range(10, 100).map((age) => (
            <option value={age} key={age.toString()}>
                {age}
            </option>
        ))
        return listItems
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    agree = (e) => {
        if (this.state.checkterm === 'false') {
            this.setState({checkterm: e.target.value})
        } else {
            this.setState({checkterm: 'false'})
        }
    }
    // SignUp button 클릭 함수
    clickSignUp = () => {
        console.log(this.state)
    }
    render() {
        const {
            id,
            name,
            password1,
            password2,
            email,
            gender,
            age,
        } = this.state
        return (
            <div className="container">
                {/* ID */}
                <div>
                    <div className="input_container">
                        <img
                            className="icon"
                            src={ProfileIcon}
                            alt="profile image"
                        />
                        <div className="input_wrapper">
                            <input
                                className="inputBox"
                                type="text"
                                name="id"
                                placeholder="ID"
                                value={id}
                                onChange={this.handleChange}
                            />
                        </div>
                        <button className="button">중복확인</button>
                    </div>
                    <hr className="line" />
                </div>

                {/* NAME */}
                <div>
                    <div className="input_container">
                        <img
                            className="icon"
                            src={ProfileIcon}
                            alt="profile image"
                        />
                        <div className="input_wrapper">
                            <input
                                className="inputBox"
                                type="text"
                                name="name"
                                placeholder="NAME"
                                value={name}
                                onChange={this.handleChange}
                            />
                        </div>
                        <button className="button">중복확인</button>
                    </div>
                    <hr className="line" />
                </div>

                {/* PASSWORD */}
                <div>
                    <div>
                        <span className="password-text">
                            비밀번호는 문자, 숫자, 특수문자를 포함하여
                            8~16자로 입력해주세요.
                        </span>
                    </div>

                    <div className="input_container">
                        <img
                            className="icon"
                            src={ProfileIcon}
                            alt="profile image"
                        />
                        <div className="input_wrapper">
                            <input
                                className="inputBox"
                                type="password"
                                name="password1"
                                placeholder="PASSWORD"
                                value={password1}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <hr className="line" />
                </div>
                <div>
                    <div className="input_container">
                        <img
                            className="icon"
                            src={ProfileIcon}
                            alt="profile image"
                        />
                        <div className="input_wrapper">
                            <input
                                className="inputBox"
                                type="password"
                                name="password2"
                                placeholder="CONFIRM PASSWORD"
                                value={password2}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <hr className="line" />
                </div>

                {/* EMAIL */}
                <div>
                    <div className="input_container">
                        <img
                            className="icon"
                            src={ProfileIcon}
                            alt="profile image"
                        />
                        <div className="input_wrapper">
                            <input
                                className="inputBox"
                                type="email"
                                name="email"
                                placeholder="EMAIL"
                                value={email}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <hr className="line" />
                </div>

                <div className="select-container">
                    {/* 남여 선택 radio */}
                    <div className="gender-container">
                        <input
                            type="radio"
                            name="gender"
                            id="male"
                            value="male"
                            onChange={this.handleChange}
                        />
                        <label for="male" className="label1">
                            <span className="gender-name">남성</span>
                        </label>

                        <input
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                            onChange={this.handleChange}
                        />
                        <label for="female" className="label2">
                            <span className="gender-name">여성</span>
                        </label>
                    </div>

                    {/* age 선택 */}
                    <div className="age-container">
                        {/* <span className="age_title">연령</span> */}
                        <select
                            className="select_age"
                            name="age"
                            value={age}
                            onChange={this.handleChange}
                        >
                            <option selected>연령</option>
                            <this.make_ageArr />
                        </select>
                    </div>
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
                <button
                    className="signUp-btn"
                    onClick={this.clickSignUp}
                >
                    Sign Up
                </button>
            </div>
        )
    }
}
