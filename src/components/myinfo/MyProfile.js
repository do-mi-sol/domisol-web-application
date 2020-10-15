import React from "react";
import { Form, FormGroup, Label, Input, FormText, Col } from "reactstrap";
import { Avatar, Paper } from "@material-ui/core";
import "../../assets/css/MyProfile.css";
import DMSButton from "../../components/customs/DMSButton";

const MyProfile = (props) => {
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
                            <Input disabled type="id" name="id" id="Id" value={props.id} />
                        </Col>
                    </FormGroup>

                    <FormGroup row style={{ marginBottom: 15 }}>
                        <Label for="Name" sm={2} className="profile-margin">
                            NAME
                        </Label>
                        <Col sm={10}>
                            <Input disabled type="name" name="name" id="Name" value={props.name} />
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
                                value={props.email}
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
                                value={props.gender}
                            />
                        </Col>
                        <Label for="Age" sm={1}>
                            Age
                        </Label>
                        <Col sm={5}>
                            <Input disabled type="age" name="age" id="Age" value={props.age} />
                        </Col>
                    </FormGroup>
                </Paper>
            </Form>
        </div>
    );
};

export default MyProfile;
