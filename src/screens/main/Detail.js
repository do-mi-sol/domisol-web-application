import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Paper, Container } from "@material-ui/core";
import axios from "axios";

// import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/Detail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Comment from "../../components/detail/Comment";
import Counter from "../../components/detail/Counter";

import URL from "../../NET";
import DMSButton from "../../components/customs/DMSButton";

export default class Detail extends Component {
    state = {
        comments: [],
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
                });
            });
    };

    componentDidMount() {
        this.requestInfo();
    }

    render() {
        const { comments } = this.state;
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
                                            <Counter />
                                        </div>
                                    </section>
                                </div>
                                <section className="col-sm-6" style={{ minWidth: 500 }}>
                                    <img
                                        src={board_filename}
                                        alt="Boardpic"
                                        // width="100%"
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
                                    <textarea className="form-control" rows="3" required></textarea>
                                </div>
                                <DMSButton height="100%" width="80px">
                                    등록
                                </DMSButton>
                                {/* <button type="submit" className="btn btn-warning btn-lg">등록</button> */}
                            </div>
                        </Form>
                        <div>
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
