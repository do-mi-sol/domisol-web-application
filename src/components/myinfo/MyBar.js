import React, { Component } from "react";
import { Grid, Divider, Avatar, Typography } from "@material-ui/core";
import axios from "axios";

import URL from "../../NET";

import "../../assets/css/MyBar.css";

export default class MyBar extends Component {
    state = {
        profile: "/broken-image.jpg",
        name: "",
        myLevel: 0,
        myWritten: 0,
        like: 0,
        myReply: 0,
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
                        const { name } = body.data.user;
                        this.setState({
                            name,
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
        const { profile, name, myLevel, myReply, myWritten, like } = this.state;
        return (
            <div className="mybar-container">
                <Grid container direction="row" justify="space-around" alignItems="center">
                    <Grid item>
                        <div className="mybar-avater">
                            <Avatar src={profile} style={{ width: 90, height: 90 }} />
                            <div style={{ marginLeft: 24, marginTop: 10 }}>{name} 님</div>
                        </div>
                    </Grid>

                    <Grid item xs={5}>
                        <Grid
                            container
                            spacing={1}
                            justify="space-around"
                            alignItems="center"
                            direction="row"
                        >
                            <Grid item>
                                <Grid
                                    container
                                    justify="center"
                                    alignItems="center"
                                    direction="column"
                                >
                                    <div style={{ marginTop: 30 }}>
                                        <Grid item>
                                            <Typography
                                                variant="subtitle1"
                                                align="center"
                                                // key={line}
                                            >
                                                나의 레벨
                                            </Typography>
                                            <Typography
                                                variant="h4"
                                                color="textPrimary"
                                                align="center"
                                            >
                                                {myLevel}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                variant="subtitle1"
                                                align="center"
                                                // key={line}
                                            >
                                                좋아요
                                            </Typography>
                                            <Typography
                                                variant="h4"
                                                color="textPrimary"
                                                align="center"
                                            >
                                                {like}
                                            </Typography>
                                        </Grid>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid
                                    container
                                    justify="space-between"
                                    alignItems="center"
                                    direction="column"
                                >
                                    <div style={{ marginTop: 30 }}>
                                        <Grid item>
                                            <Typography
                                                variant="subtitle1"
                                                align="center"
                                                // key={line}
                                            >
                                                내가 쓴 글
                                            </Typography>
                                            <Typography
                                                variant="h4"
                                                color="textPrimary"
                                                align="center"
                                            >
                                                {myWritten}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                variant="subtitle1"
                                                align="center"
                                                // key={line}
                                            >
                                                나의 답변
                                            </Typography>
                                            <Typography
                                                variant="h4"
                                                color="textPrimary"
                                                align="center"
                                            >
                                                {myReply}
                                            </Typography>
                                        </Grid>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
