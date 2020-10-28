import React, { useState } from "react";
import { CustomInput, FormGroup, Label } from "reactstrap";
import { Typography, Paper, Divider, TextField } from "@material-ui/core";
import axios from "axios";

import DMSInput from "../../components/customs/DMSInput";
import DMSButton from "../../components/customs/DMSButton";

import URL from "../../NET";

import "../../assets/css/Write.css";

function Write() {
    const [imgBase64, setImgBase64] = useState("");
    const [imgFile, setImgFile] = useState(null);
    const [tempImg, setDataURI] = useState(require("../../assets/images/upload.png"));
    const [board_filename, setFileName] = useState("");
    console.log(board_filename);

    const [box, setBox] = useState("");
    const [title, setTitle] = useState("");

    const handleChangeFile = (event) => {
        let reader = new FileReader();

        reader.onloadend = () => {
            const base64 = reader.result;
            if (base64) {
                setImgBase64(base64.toString());
                var tempImage = new Image();
                tempImage.src = reader.result;
                tempImage.onload = function () {
                    var canvas = document.createElement("canvas");
                    var canvasContext = canvas.getContext("2d");

                    canvas.width = 380;
                    canvas.height = 600;

                    canvasContext.drawImage(this, 0, 0, 380, 600);
                    setDataURI(canvas.toDataURL("image/jpeg"));
                };
            }
        };
        if (event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0]);
            setImgFile(event.target.files[0]);
            setFileName(event.target.files[0].name);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("board_box", event.target.box.value);
        formData.append("board_title", event.target.title.value);
        formData.append("board_filename", event.target.board_filename.files[0]);
        console.log(formData);

        write(formData);
    };

    const write = async (formData) => {
        const token = await localStorage.getItem("token");
        const bearer = `Bearer ${token}`;
        if (token == null) {
            alert("로그인 후 이용해주세요.");
            window.location.assign("/login");
        } else {
            await axios
                .post(URL.boardwrite, formData, {
                    headers: {
                        Authorization: bearer,
                    },
                })
                .then((res) => res.data)
                .then((body) => {
                    if (body.success) {
                        console.log(body);
                        alert("글이 작성되었습니다.");
                        window.location.assign("/board");
                    } else {
                        alert(body.message);
                        window.location.assign("/write");
                    }
                });
        }
    };

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
                                    marginBottom: 10,
                                    fontWeight: "bold",
                                }}
                            >
                                잘하고싶다.. 연애!
                            </Typography>
                        </div>

                        <Divider />

                        <div className="write-container">
                            <div className="write-picture-container">
                                <Label for="talk_img">
                                    <img className="write-talk-img" src={tempImg} alt="" />
                                </Label>
                                <div>
                                    <form encType="multipart/form-data" onSubmit={handleSubmit}>
                                        <input
                                            style={{ width: 500, height: 35, marginBottom: 30 }}
                                            type="text"
                                            name="title"
                                            onChange={(e) => setTitle(e.target.value)}
                                            placeholder="제목을 입력해주세요"
                                            value={title}
                                        ></input>

                                        <input
                                            style={{ width: 500, height: 500 }}
                                            type="text"
                                            name="box"
                                            placeholder="내용을 입력해주세요"
                                            onChange={(e) => setBox(e.target.value)}
                                            value={box}
                                        ></input>

                                        <input
                                            type="file"
                                            id="file-input"
                                            accept="image/jpg,image/png,image/jpeg"
                                            name="board_filename"
                                            className="write-talk-input"
                                            onChange={handleChangeFile}
                                        />
                                        <button type="submit">Upload</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="write-button-container">
                        <div className="write-button">
                            <form encType="multipart/form-data" onSubmit={write}>
                                글쓰기
                            </form>
                        </div>
                        <div className="write-button">
                            <DMSButton
                                className="write-write-button"
                                variant="contained"
                                onClick={() => {
                                    window.location.assign("/board");
                                }}
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

export default Write;
