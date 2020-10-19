import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Col } from "reactstrap";
import { Avatar, Paper } from "@material-ui/core";
import axios from "axios";

import URL from "../../NET";

import "../../assets/css/MyProfile.css";

export default class MyProfile extends Component {
    state = {
        id: "",
        email: "",
        name: "",
        gender: "",
        age: "",
    };

    requestInfo = async () => {
        const token = await localStorage.getItem("token");
        const bearer = `Bearer ${token}`;

        if (token == null) {
            this.setState({
                id: "비회원",
                email: "비회원",
                name: "비회원",
            });
            window.location.assign("/login");
            alert("로그인이 필요한 페이지입니다. 로그인 후 이용해주세요.");
        } else {
            await axios
                .post(URL.account, null, {
                    headers: {
                        Authorization: bearer,
                    },
                })
                .then((res) => res.data)
                .then((body) => {
                    console.log(body);

                    if (body.success) {
                        const { user_id, email, name, gender, age } = body.data.user;
                        this.setState({
                            id: user_id,
                            email,
                            name,
                            gender,
                            age,
                        });
                    } else {
                        alert(body.message);
                    }
                });
        }
    };

    componentDidMount() {
        this.requestInfo();
    }

    render() {
        const { id, email, age, gender, name } = this.state;
        return (
            <div>
                <h3 style={{ color: "gray", textShadow: "1px 1px 1px gray", marginBottom: 20 }}>
                    나의 정보
                </h3>
                <Form className="profile-form">
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
                        <FormGroup row className="profile-imageContainer">
                            <Label for="exampleFile" sm={2}>
                                <div className="profile-imageLabel">IMAGE</div>
                            </Label>
                            <Avatar
                                src="/broken-image.jpg"
                                style={{ width: 150, height: 150, marginRight: 15 }}
                            />
                            <Col sm={6}></Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="Id" sm={2} className="profile-margin">
                                ID
                            </Label>
                            <Col sm={10}>
                                <Input disabled type="id" name="id" id="Id" value={id} />
                            </Col>
                        </FormGroup>

                        <FormGroup row style={{ marginBottom: 15 }}>
                            <Label for="Name" sm={2} className="profile-margin">
                                NAME
                            </Label>
                            <Col sm={10}>
                                <Input disabled type="name" name="name" id="Name" value={name} />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="Email" sm={2} className="profile-margin">
                                EMAIL
                            </Label>
                            <Col sm={10}>
                                <Input
                                    disabled
                                    type="email"
                                    name="email"
                                    id="Email"
                                    value={email}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="Password" sm={2} className="profile-margin">
                                PASSWORD
                            </Label>
                            <Col sm={10}>
                                <Input
                                    disabled
                                    type="password"
                                    name="password"
                                    id="Password"
                                    value="*************************"
                                    placeholder="현재 비밀번호를 입력해주세요."
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="Gender" sm={2} className="profile-margin">
                                Gender
                            </Label>
                            <Col sm={4}>
                                <Input
                                    disabled
                                    type="text"
                                    name="gender"
                                    id="Gender"
                                    value={gender}
                                />
                            </Col>
                            <Label for="Age" sm={1}>
                                Age
                            </Label>
                            <Col sm={5}>
                                <Input disabled type="age" name="age" id="Age" value={age} />
                            </Col>
                        </FormGroup>
                    </Paper>
                </Form>
            </div>
        );
    }
}
