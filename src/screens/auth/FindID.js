import React, {Component} from 'react'
import {Container, Divider} from '@material-ui/core'
import DMSInput from '../../components/customs/DMSInput'
import DMSButton from '../../components/customs/DMSButton'

export default class FindID extends Component {
    state = {
        email: '',
    }

    render() {
        return (
            <Container
                maxWidth="xs"
                style={{marginTop: 30, marginBottom: 20}}
            >
                <img
                    className="logo-icon"
                    src={require('../../assets/images/Logo.jpg')}
                    alt="logo"
                />
                <h3>아이디 찾기</h3>

                <Divider />
                <br />
                {/* EMAIL */}
                <div>
                    <DMSInput
                        value={email}
                        name="email"
                        type="email"
                        label="EMAIL"
                        onChange={this.handleChange}
                        variant="outlined"
                        helper="회원가입때 입력하셨던 이메일을 입력해주세요."
                    />
                </div>
            </Container>
        )
    }
}
