import React, { Component } from "react";
import { CustomInput, FormGroup, Label } from "reactstrap";
import { Typography, Paper } from "@material-ui/core";
import axios from "axios";

import DMSButton from "../../components/customs/DMSButton";
import RichTextEditor from "../../components/write/TextEditor";
import TitleInput from "../../components/write/TitleInput";

import URL from "../../NET";

import "../../assets/css/Write.css";

export default class Write extends Component {
    state = {
        title: "",
        test: "https://cdn.clien.net/web/api/file/F01/3802215/92348cd7fe8441e8956.JPG",
        file: "",
        previewURL: "",
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    //사진저장후 프리뷰함수
    handleFileOnChange = (event) => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            this.setState({
                test: "",
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
        const { title } = this.state;
        await axios
            .post(
                URL.boardwrite,
                {
                    board_title: title,
                    // board_box: box,
                    // board_filename: file
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
        const { title } = this.state;
        let talk_preview = null;
        if (this.state.file !== "") {
            talk_preview = <img className="talk_preview" src={this.state.previewURL} alt="" />;
        }
        return (
            <div className="write-background">
                <div
                    className="write-card-container"
                    style={{ justifyContent: "center", alignItems: "center" }}
                >
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
                        <form className="container" onSubmit={this.handleSudmit}>
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
                            <hr className="write-line2" />
                            <div className="write-container">
                                <div className="write-picture-container">
                                    <Label for="talk_img">
                                        <img
                                            className="write-talk-img"
                                            src={this.state.test}
                                            alt=""
                                        />
                                    </Label>
                                    <CustomInput
                                        type="file"
                                        id="talk_img"
                                        accept="image/jpg,image/png,image/jpeg"
                                        name="talk_img"
                                        className="write-talk-input"
                                        onChange={this.handleFileOnChange}
                                    />
                                    {talk_preview}
                                </div>

                                <div className="write-input-container">
                                    <FormGroup>
                                        <div className="write-title-input">
                                            <TitleInput
                                                className="write-title-input"
                                                value={title}
                                                onChange={this.handleChange}
                                                type="title"
                                                label="TITLE"
                                                variant="outlined"
                                            />
                                        </div>

                                        <div className="write-contents-input">
                                            <RichTextEditor />
                                        </div>
                                    </FormGroup>
                                </div>
                            </div>
                        </form>

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
                                <DMSButton className="write-write-button" variant="contained">
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
