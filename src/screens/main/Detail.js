import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Paper, Container } from "@material-ui/core";
import axios from "axios";

import "../../assets/css/Detail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Comment from "../../components/detail/Comment";

import URL from "../../NET";
import DMSButton from "../../components/customs/DMSButton";

export default class Detail extends Component {
    state = {
        comments: [],
        comment_date: null,
        comment_box: "",
        board_heart: 0,
        board_filename_init: "",
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    requestInfo = async () => {
        const { board_number } = this.props.location.state.row;

        await axios
            .post(URL.comment, {
                board_number,
            })
            .then((res) => res.data)
            .then((body) => {
                this.setState({
                    comments: body.data.comment,
                    board_heart: body.data.board_heart,
                });
            });
    };

    comment = async () => {
        const { board_number } = this.props.location.state.row;
        const { comment_box } = this.state;
        const token = await localStorage.getItem("token");
        const bearer = `Bearer ${token}`;

        if (token == null) {
            alert("로그인이 필요한 서비스입니다. 로그인 후 이용해주세요.");
            window.location.assign("/login");
        } else {
            await axios
                .post(
                    URL.commentwrite,
                    {
                        board_number,
                        comment_box,
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
                        window.location.reload();
                    } else {
                        alert(body.message);
                        window.location.reload();
                    }
                });
        }
    };

    boardHeart = async () => {
        const token = await localStorage.getItem("token");
        const bearer = `Bearer ${token}`;
        const { board_number } = this.props.location.state.row;

        await axios
            .post(
                URL.boardheart,
                { board_number },
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
                    this.setState({
                        board_heart: body.data.board_heart,
                    });
                    alert("하트를 받았어요!");
                    window.location.reload();
                } else {
                    alert(body.message);
                }
            });
    };

    componentDidMount() {
        this.requestInfo();
    }

    render() {
        const { comments, comment_box, board_heart } = this.state;
        const {
            count,
            board_title,
            name,
            gender,
            board_date,
            board_box,
            board_views,
            board_filename,
        } = this.props.location.state.row;
        console.log(board_filename);

        return (
            <div>
                <Container
                    style={{
                        marginTop: 30,
                        marginBottom: 20,
                        paddingTop: "10vh",
                        paddingBottom: "20vh",
                        minHeight: "90vh",
                        minWidth: 500,
                    }}
                >
                    <Paper
                        elevation={3}
                        style={{
                            width: "100%",
                            padding: 40,
                            borderRadius: 30,
                            marginBottom: 50,
                            minWidth: 1200,
                        }}
                    >
                        <div container="col-sm-12" style={{ minWidth: 1180 }}>
                            <div className="row ">
                                <div className="col-sm-6" style={{ minWidth: 590 }}>
                                    <section className="detail-boardtext">
                                        <h6>도미솔 {count}번째 글</h6>
                                        <h2>{board_title}</h2>
                                        <hr />
                                        <div className="detail-view" style={{ minHeight: 380 }}>
                                            <div
                                                className="detail-rowWrapper"
                                                style={{ justifyContent: "space-between" }}
                                            >
                                                <div className="detail-rowWrapper">
                                                    <h5>{name}</h5>
                                                    {gender === "male" ? (
                                                        <FontAwesomeIcon
                                                            icon={"male"}
                                                            style={{
                                                                color: "skyblue",
                                                                position: "relative",
                                                                top: 5,
                                                                left: 5,
                                                            }}
                                                        />
                                                    ) : (
                                                        <FontAwesomeIcon
                                                            icon={"female"}
                                                            style={{
                                                                color: "pink",
                                                                position: "relative",
                                                                top: 5,
                                                                left: 5,
                                                            }}
                                                        />
                                                    )}
                                                </div>
                                                <p style={{ width: "60%" }}>
                                                    {new Date(board_date).toLocaleString()}
                                                </p>
                                            </div>

                                            <p>{board_box}</p>
                                        </div>
                                        <hr />
                                        <div
                                            className="detail-rowWrapper"
                                            style={{ justifyContent: "space-between" }}
                                        >
                                            <p>조회 : {board_views}</p>
                                            <button
                                                onClick={this.boardHeart}
                                                type="button"
                                                className="btn btn-danger btn-sm"
                                            >
                                                <span className="glyphicon glyphicon-heart"></span>
                                                Heart {board_heart}
                                            </button>
                                        </div>
                                    </section>
                                </div>
                                <section className="col-sm-6" style={{ minWidth: 500 }}>
                                    <img
                                        src={board_filename}
                                        alt="Boardpic"
                                        width={300}
                                        style={{ marginLeft: 130 }}
                                    />
                                </section>
                            </div>
                        </div>
                    </Paper>
                    <div className="detail-commentContainer">
                        <h4>Leave a comment:</h4>
                        <Form role="form">
                            <div className="detail-rowWrapper">
                                <div className="detail-form-group">
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        required
                                        name="comment_box"
                                        value={comment_box}
                                        onChange={this.handleChange}
                                    ></textarea>
                                </div>
                                <DMSButton height="100%" width="80px" onClick={this.comment}>
                                    등록
                                </DMSButton>
                            </div>
                        </Form>
                        <div style={{ marginTop: 30 }}>
                            {comments.map((value) => (
                                <Comment
                                    key={value.comment_number}
                                    name={value.user_id}
                                    date={new Date(value.comment_date).toLocaleString()}
                                    text={value.comment_box}
                                ></Comment>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}
