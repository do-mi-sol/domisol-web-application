import React from "react";
import { Form, FormGroup, Label, Input, FormText, Col } from "reactstrap";
import { Paper } from "@material-ui/core";
import "../../assets/css/MyModify.css";
import DMSButton from "../../components/customs/DMSButton";

const MyModify = (props) => {
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
                            변경 아이디
                        </Label>
                        <Col sm={10}>
                            <Input disabled type="id" name="id" id="Id" value={props.id} />
                        </Col>
                    </FormGroup>

                    <FormGroup row style={{ marginBottom: 15 }}>
                        <Label for="Name" sm={2} className="modify-margin">
                            비밀번호
                        </Label>
                        <Col sm={10}>
                            <Input disabled type="name" name="name" id="Name" value={props.name} />
                        </Col>
                    </FormGroup>
                    <DMSButton children="확인" />
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
                            <Input disabled type="id" name="id" id="Id" value={props.id} />
                        </Col>
                    </FormGroup>

                    <FormGroup row style={{ marginBottom: 15 }}>
                        <Label for="Name" sm={2} className="modify-margin">
                            현재 비밀번호
                        </Label>
                        <Col sm={10}>
                            <Input disabled type="name" name="name" id="Name" value={props.name} />
                        </Col>
                    </FormGroup>
                    <DMSButton children="확인" />
                </Paper>
            </Form>
        </div>
    );
};

export default MyModify;
