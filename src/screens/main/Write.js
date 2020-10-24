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
    const [tempImg, setDataURI] = useState(require("../../assets/images/message_help.gif"));
    const [filename, setFileName] = useState("");
    console.log(imgBase64 + imgFile);

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

    const write = async () => {
        const token = await localStorage.getItem("token");
        const bearer = `Bearer ${token}`;
        if (token == null) {
            alert("로그인 후 이용해주세요.");
            window.location.assign("/login");
        } else {
            await axios
                .post(
                    URL.boardwrite,
                    {
                        board_title: title,
                        board_box: box,
                        board_filename: filename,
                    },
                    {
                        headers: {
                            Authorization: bearer,
                        },
                    }
                )
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
                                잘하고싶다.. 연애
                            </Typography>
                        </div>

                        <Divider />

                        <div className="write-container">
                            <div className="write-picture-container">
                                <Label for="talk_img">
                                    <img className="write-talk-img" src={tempImg} alt="" />
                                </Label>
                                <CustomInput
                                    type="file"
                                    id="file-input"
                                    accept="image/jpg,image/png,image/jpeg"
                                    name="file"
                                    className="write-talk-input"
                                    onChange={handleChangeFile}
                                />
                            </div>

                            <div className="write-input-container">
                                <FormGroup>
                                    <div className="write-title-input">
                                        <DMSInput
                                            variant="outlined"
                                            name="title"
                                            value={title}
                                            width="100%"
                                            onChange={(e) => setTitle(e.target.value)}
                                            placeholder="제목을 입력해주세요."
                                        />
                                    </div>

                                    <div className="write-contents-input">
                                        <form noValidate autoComplete="off">
                                            <div>
                                                <TextField
                                                    className="write-box"
                                                    placeholder="내용을 입력해주세요."
                                                    value={box}
                                                    multiline
                                                    rows={30}
                                                    variant="outlined"
                                                    onChange={(e) => setBox(e.target.value)}
                                                    style={{ overflow: "auto", width: "100%" }}
                                                />
                                            </div>
                                        </form>
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
                                onClick={write}
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
                                // onClick={<Link to="/board" />}
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
