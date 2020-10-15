import React, {Component} from 'react'
import {
  Divider,
  Container,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import axios from "axios"

import Term from '../../components/signup/Term'
import SelectAge from '../../components/signup/SelectAge'
import InputWithBtn from '../../components/signup/InputWithBtn'
import GenderRadio from '../../components/signup/GenderRadio'
import DMSInput from '../../components/customs/DMSInput'
import DMSButton from '../../components/customs/DMSButton'

import URL from "../../NET"

import '../../assets/css/SignUp.css'

export default class SignUp extends Component {
    state = {
        id: '',
        name: '',
        password1: '',
        password2: '',
        email: '',
        gender: '',
        age: '',
        checkterm: false,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
        console.log(e.target.value)
    }
    agreeterm = (event) => {
        this.setState({[event.target.name]: event.target.checked})
        console.log(event.target.checked)
    }

    signUp = async () => {
      const { id, name, password1, email, gender, age } = this.state;
      await axios
        .post(URL.signup, {
          user_id: id,
          email,
          password: password1,
          name,
          gender,
          age,
        })
        .then((res) => res.data)
        .then((body) => console.log(body));
    };

    render() {
        const {id, name, password1, password2, email} = this.state
        return (
            <div className="signUp-container">
                <Container
                    maxWidth="xs"
                    style={{
                        marginTop: 30,
                        marginBottom: 20,
                        paddingTop: '10vh',
                        paddingBottom: '20vh',
                        minHeight: '90vh',
                    }}
                >
                    <img
                        className="signUp-logoIcon"
                        src={require('../../assets/images/Logo.jpg')}
                        alt="logo"
                    />
                    <h3>회원가입</h3>

                    <Divider />
                    <br />

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
                    {/* PASSWORD */}
                    <div>
                        <div>
                            <DMSInput
                                value={password1}
                                name="password1"
                                type="password"
                                label="PASSWORD"
                                onChange={this.handleChange}
                                variant="outlined"
                                helper="문자, 숫자, 특수문자를 포함하여 8~16자로 입력해주세요."
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
                                <GenderRadio
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Divider
                                orientation="vertical"
                                flexItem
                                light
                                style={{margin: 15}}
                            />
                            <Grid item>
                                <SelectAge
                                    age={this.age}
                                    handleChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className="signUp-termContainer">
                        <Accordion>
                            <AccordionSummary
                                expandIcon={
                                    <FontAwesomeIcon
                                        icon={'angle-down'}
                                    />
                                }
                                aria-label="Expand"
                                aria-controls="additional-actions1-content"
                                id="additional-actions1-header"
                            >
                                <FormControlLabel
                                    aria-label="Acknowledge"
                                    onClick={(event) =>
                                        event.stopPropagation()
                                    }
                                    onFocus={(event) =>
                                        event.stopPropagation()
                                    }
                                    control={
                                        <Checkbox
                                            name="checkterm"
                                            onChange={this.agreeterm}
                                        />
                                    }
                                    label="이용약관"
                                />
                            </AccordionSummary>
                            <AccordionDetails>
                                <Term />
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <DMSButton
                        className="signup-button"
                        children="회원가입"
                        variant="contained"
                        size="large"
                        width={400}
                        margin={20}
                        onClick={this.signUp}
                    />
                </Container>
            </div>
        )
    }
}
