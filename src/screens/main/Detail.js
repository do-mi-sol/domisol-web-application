import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Paper } from "@material-ui/core";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import Comment from "../../components/detail/Comment";
import Counter from "../../components/detail/Counter";

import URL from "../../NET";

export default class Detail extends Component {
    state = {
        comments: [],
    };

    requestInfo = async () => {
        await axios
            .post(URL.comment)
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
        console.log(comments);
        return (
            <div>
                {/* <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
                ></link> */}

                <div className="container center">
                    <Paper
                        elevation={3}
                        style={{ width: "100%", padding: 40, borderRadius: 30, marginBottom: 50 }}
                    >
                        <br></br>
                        <br></br>
                        <div container="col-sm-12">
                            <div className="row ">
                                <div className="col-sm-6">
                                    <section className="detail-boardtext">
                                        <h4>
                                            <small>잘하고싶다...연애</small>
                                        </h4>
                                        <hr border-color="yellow" border-style="solid" />
                                        <h5>
                                            <span className="glyphicon glyphicon-time"></span> Post
                                            by Jane Dane, Sep 27, 2015.
                                        </h5>
                                        <h2>썸인가요?????</h2>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>

                                        <p>
                                            Food is my passion. Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo consequat. Excepteur sint
                                            occaecat cupidatat non proident, sunt in culpa qui
                                            officia deserunt mollit anim id est laborum consectetur
                                            adipiscing elit, sed do eiusmod tempor incididunt ut
                                            labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </p>
                                        <br></br>

                                        <hr border-color="yellow" border-style="solid" />
                                        <br></br>
                                        <Counter></Counter>
                                    </section>
                                </div>
                                <section className="col-sm-6 ">
                                    <img
                                        src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20110108_7%2Fwooroo88_1294461731368Btxio_JPEG%2F17773_S08_092951.jpg&type=sc960_832"
                                        alt="Boardpic"
                                        width="100%"
                                        height="550px"
                                    />
                                </section>
                            </div>
                            <br></br>
                            <br></br>
                        </div>
                    </Paper>
                    <br></br> <br></br>
                    <h4>Leave a comment:</h4>
                    <Form role="form">
                        <div className="form-group">
                            <textarea className="form-control" rows="3" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-warning btn-lg">
                            등록
                        </button>
                    </Form>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div>
                        {comments.map((value) => (
                            <Comment
                                name={value.user_id}
                                date={value.comment_date}
                                text={value.comment_box}
                            ></Comment>
                        ))}
                    </div>
                    <br></br>
                </div>
            </div>
        );
    }
}
