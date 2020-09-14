import React, {Component} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import SelectAge from '../../components/signup/SelectAge'
import InputWithBtn from '../../components/signup/InputWithBtn'
import DMSInput from '../../components/customs/DMSInput'
import DMSButton from '../../components/customs/DMSButton'

import '../../assets/css/SignUp.css'
import Term from '../../components/signup/Term'

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

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    // SignUp button 클릭 함수
    clickSignUp = () => {
        console.log(this.state)
    }
    render() {
        const {id, name, password1, password2, email} = this.state
        return (
            <div className="container">
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
                    <InputWithBtn
                        value={name}
                        name="name"
                        type="text"
                        label="NAME"
                        onChange={this.handleChange}
                    />
                </div>

                {/* PASSWORD */}
                <div>
                    <div>
                        <span className="password-text">
                            비밀번호는 문자, 숫자, 특수문자를 포함하여
                            8~16자로 입력해주세요.
                        </span>
                    </div>
                    <div>
                        <DMSInput
                            value={password1}
                            name="password1"
                            type="password"
                            label="PASSWORD"
                            onChange={this.handleChange}
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <DMSInput
                            value={password2}
                            name="password2"
                            type="password"
                            label="Confirm PASSWORD"
                            onChange={this.handleChange}
                            variant="outlined"
                        />
                    </div>
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

                    <div>
                        <SelectAge
                            age={this.age}
                            handleChange={this.handleChange}
                        />
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
                <DMSButton
                    className="signup-button"
                    children="회원가입"
                    variant="contained"
                    size="large"
                    width={400}
                    color="#ffd400"
                    margin={20}
                />
            </div>
        )
    }
}
