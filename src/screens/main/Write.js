import React, { Component } from "react";
import { CustomInput, FormGroup, Label } from "reactstrap";
import { Typography, Paper } from "@material-ui/core";
import axios from "axios";

import DMSInput from "../../components/customs/DMSInput";
import DMSButton from "../../components/customs/DMSButton";
import TextEditor from "../../components/write/TextEditor";
import TitleInput from "../../components/write/TitleInput";

import URL from "../../NET";

import "../../assets/css/Write.css";

export default class Write extends Component {
    state = {
        title: "",
        test: "https://cdn.clien.net/web/api/file/F01/3802215/92348cd7fe8441e8956.JPG",
        file: "dfs.jpg",
        previewURL: "",
        box: "",
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
        console.log(this.state.file);
    };

    //사진저장후 프리뷰함수
    handleFileOnChange = (event) => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                previewURL: reader.result,
            });
        };
        reader.readAsDataURL(file);
    };

    handleSudmit = (e) => {
        e.preventDefult();
        this.props.onSaveData(this.state);
    };

    write = async () => {
        const token = await localStorage.getItem("token");
        const bearer = `Bearer ${token}`;
        const { title, box, file } = this.state;
        await axios
            .post(
                URL.boardwrite,
                {
                    board_title: title,
                    board_box: box,
                    board_filename: file.name,
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
                alert("글이 작성되었습니다.");
                window.location.assign("/board");
            });
    };

    render() {
        const { title, box, file } = this.state;
        let talk_preview = "";

        return (
            <div className="write-background">
                <div className="write-card-container">
                    <Paper
                        elevation={3}
                        style={{
                            width: "80%",
                            padding: 40,
                            borderRadius: 30,
                            marginBottom: 50,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <div className="container">
                            <div className="write-boardtext">
                                <Typography
                                    variant="h5"
                                    style={{
                                        marginTop: "10px",
                                        marginLeft: "20px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    잘하고싶다.. 연애
                                </Typography>
                            </div>

                            <div className="write-container">
                                <div className="write-picture-container">
                                    <Label for="talk_img">
                                        <img
                                            fixed
                                            className="write-talk-img"
                                            src={require("../../assets/images/message_help.gif")}
                                            style={{ height: 650 }}
                                            alt=""
                                        />
                                    </Label>
                                    <CustomInput
                                        type="file"
                                        accept="image/jpg,image/png,image/jpeg"
                                        name="file"
                                        className="write-talk-input"
                                        onChange={this.handleChange}
                                    />
                                    {talk_preview}
                                </div>

                                <div className="write-input-container">
                                    <FormGroup>
                                        <div className="write-title-input">
                                            <DMSInput
                                                variant="outlined"
                                                name="title"
                                                value={title}
                                                onChange={this.handleChange}
                                                placeholder="제목을 입력해주세요."
                                            />
                                        </div>

                                        <div className="write-contents-input">
                                            <TextEditor
                                                value={box}
                                                name="box"
                                                onChange={(content, delta, source, editor) => {
                                                    this.setState({
                                                        box: content,
                                                    });
                                                }}
                                            />
                                        </div>
                                    </FormGroup>
                                </div>
                            </div>
                        </div>

                        <div className="write-button-container">
                            <div className="write-button">
                                <DMSButton
                                    className="write-write-button"
                                    variant="contained"
                                    onClick={this.write}
                                >
                                    글쓰기
                                </DMSButton>
                            </div>
                            <div className="write-button">
                                <DMSButton className="write-write-button" variant="contained">
                                    다시 쓰기
                                </DMSButton>
                            </div>
                            <div className="write-button">
                                <DMSButton
                                    className="write-write-button"
                                    variant="contained"
                                    // onClick={window.location.assign("/board")}
                                >
                                    목록
                                </DMSButton>
                            </div>
                            <br></br>
                        </div>
                    </Paper>
                </div>
            </div>
        );
    }
}
