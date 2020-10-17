import React, { Component } from "react";
import { Form, FormGroup, Label, Input, FormText, Col } from "reactstrap";
import { Paper } from "@material-ui/core";
import axios from "axios";

import DMSInput from "../../components/customs/DMSInput";
import DMSButton from "../../components/customs/DMSButton";
import URL from "../../NET";

import "../../assets/css/MyModify.css";

export default class MyModify extends Component {
    state = {
        newId: "",
        newPassword: "",
        password1: "",
        password2: "",
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
        console.log(e.target.value);
    };

    idModify = async () => {
        const token = await localStorage.getItem("token");
        const bearer = `Bearer ${token}`;
        const { newId, password1 } = this.state;

        await axios
            .put(
                URL.idmodify,
                {
                    new_user_id: newId,
                    password: password1,
                },
                {
                    headers: {
                        Authorization: bearer,
                    },
                }
            )
            .then((res) => res.data)
            .then((body) => {
                console.log(body);

                if (body.success) {
                    localStorage.removeItem("token");
                    alert("로그인 환경이 변경되었습니다. 재로그인 해주세요.");
                    window.location.replace("/");
                } else {
                    alert(body.message);
                    window.location.reload();
                }
            });
    };

    passwordModify = async () => {
        const token = await localStorage.getItem("token");
        const bearer = `Bearer ${token}`;
        const { newPassword, password2 } = this.state;

        await axios
            .put(
                URL.passwordmodify,
                {
                    new_password: newPassword,
                    password: password2,
                },
                {
                    headers: {
                        Authorization: bearer,
                    },
                }
            )
            .then((res) => res.data)
            .then((body) => {
                console.log(body);

                if (body.success) {
                    localStorage.removeItem("token");
                    alert("로그인 환경이 변경되었습니다. 재로그인 해주세요.");
                    window.location.replace("/");
                } else {
                    alert(body.message);
                    window.location.reload();
                }
            });
    };

    render() {
        const { newId, newPassword, password1, password2 } = this.state;
        return (
            <div>
                <h3 style={{ color: "gray", textShadow: "1px 1px 1px gray", marginBottom: 20 }}>
                    아이디 수정
                </h3>
                <Form className="modify-form">
                    <Paper
                        elevation={3}
                        style={{
                            width: "100%",
                            minWidth: "1000px",
                            padding: 50,
                            borderRadius: 30,
                            marginBottom: 50,
                        }}
                    >
                        <FormGroup row>
                            <Label for="Id" sm={2} className="modify-margin">
                                새 아이디
                            </Label>
                            <Col sm={10}>
                                <DMSInput
                                    value={newId}
                                    name="newId"
                                    onChange={this.handleChange}
                                    variant="outlined"
                                    placeholder="변경할 아이디를 입력하세요."
                                    width={720}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row style={{ marginBottom: 15 }}>
                            <Label for="Name" sm={2} className="modify-margin">
                                비밀번호
                            </Label>
                            <Col sm={10}>
                                <DMSInput
                                    value={password1}
                                    name="password1"
                                    type="password"
                                    onChange={this.handleChange}
                                    variant="outlined"
                                    placeholder="현재 비밀번호를 입력하세요."
                                    helper="문자, 숫자, 특수문자를 포함하여 8~16자로 입력해주세요."
                                    width={720}
                                />
                            </Col>
                        </FormGroup>
                        <DMSButton children="확인" onClick={this.idModify} />
                    </Paper>

                    <h3 style={{ color: "gray", textShadow: "1px 1px 1px gray", marginBottom: 20 }}>
                        비밀번호 수정
                    </h3>
                    <Paper
                        elevation={3}
                        style={{
                            width: "100%",
                            minWidth: "1000px",
                            padding: 50,
                            borderRadius: 30,
                            marginBottom: 50,
                        }}
                    >
                        <FormGroup row>
                            <Label for="Id" sm={2} className="modify-margin">
                                변경 비밀번호
                            </Label>
                            <Col sm={10}>
                                <DMSInput
                                    value={newPassword}
                                    name="newPassword"
                                    type="password"
                                    onChange={this.handleChange}
                                    variant="outlined"
                                    placeholder="새 비밀번호를 입력하세요."
                                    helper="문자, 숫자, 특수문자를 포함하여 8~16자로 입력해주세요."
                                    width={720}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row style={{ marginBottom: 15 }}>
                            <Label for="Name" sm={2} className="modify-margin">
                                현재 비밀번호
                            </Label>
                            <Col sm={10}>
                                <DMSInput
                                    value={password2}
                                    name="password2"
                                    type="password"
                                    onChange={this.handleChange}
                                    variant="outlined"
                                    placeholder="현재 비밀번호를 입력하세요."
                                    helper="문자, 숫자, 특수문자를 포함하여 8~16자로 입력해주세요."
                                    width={720}
                                />
                            </Col>
                        </FormGroup>
                        <DMSButton children="확인" onClick={this.passwordModify} />
                    </Paper>
                </Form>
            </div>
        );
    }
}
