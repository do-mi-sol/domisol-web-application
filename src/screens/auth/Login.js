import React, {Component} from 'react'
import {Divider, Container} from '@material-ui/core'

import DMSInput from '../../components/customs/DMSInput'
import DMSButton from '../../components/customs/DMSButton'

import '../../assets/css/Login.css'

export default class Login extends Component {
    state = {
        id: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        const {id, password} = this.state
        return (
            <div
                className="login-array"
                style={{
                    marginTop: 60,
                    paddingTop: '10vh',
                    minHeight: '90vh',
                }}
            >
                <div>
                    <img
                        className="login-icon"
                        src={require('../../assets/images/Logo.jpg')}
                        alt="logo"
                    />
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
                        type="password"
                        label="Password"
                        onChange={this.handleChange}
                        variant="outlined"
                    />
                </div>

                <div className="login-buttonContainer">
                    <DMSButton
                        className="button1"
                        children="로그인"
                        variant="contained"
                        size="large"
                        width={400}
                        margin={20}
                    />
                </div>

                <Container maxWidth="xs" style={{marginTop: 30}}>
                    <Divider />
                </Container>

                <div>
                    <DMSButton
                        children="회원가입"
                        margin={20}
                        href="/signup"
                        color="null"
                    />
                    <DMSButton
                        children="아이디 찾기"
                        color="null"
                        href="/findid"
                    />
                    <DMSButton
                        children="비밀번호 찾기"
                        color="null"
                        href="/findpw"
                    />
                </div>
            </div>
        )
    }
}
