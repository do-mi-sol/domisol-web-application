import React, { Component } from "react";
import { Grid, Divider, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import axios from "axios";

import URL from "../../NET";

const useStyles = makeStyles((theme) => ({
    barContainer: {
        width: "100%",
        padding: theme.spacing(1, 0, 0),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    innerGrid: {
        height: theme.spacing(22),
    },
    bar: {
        width: "80%",
        minWidth: 800,
        backgroundColor: "#d6d6d4",
        margin: theme.spacing(2),
        borderRadius: 20,
        boxShadow: "12px 12px 12px #e6e6e6",
        marginBottom: 50,
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        right: "25%",
    },
}));

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
            <div className={useStyles.barContainer}>
                <Grid
                    container
                    direction="row"
                    spacing={5}
                    justify="space-around"
                    alignItems="center"
                    className={useStyles.bar}
                >
                    <Grid item>
                        <Avatar
                            src={profile}
                            className={useStyles.large}
                            style={{ width: 130, height: 130 }}
                        />
                    </Grid>

                    <Grid item>
                        <Typography variant="h4" color="textPrimary">
                            {name} 님
                        </Typography>
                    </Grid>

                    <Divider orientation="vertical" variant="middle" flexItem />

                    <Grid item xs={5}>
                        <Grid
                            container
                            spacing={1}
                            justify="space-around"
                            alignItems="center"
                            direction="row"
                            className={useStyles.innerGrid}
                        >
                            <Grid item>
                                <Grid
                                    container
                                    justify="center"
                                    alignItems="center"
                                    direction="column"
                                    style={{ height: "100%" }}
                                >
                                    <Grid item>
                                        <Typography
                                            variant="subtitle1"
                                            align="center"
                                            // key={line}
                                        >
                                            나의 레벨
                                        </Typography>
                                        <Typography variant="h4" color="textPrimary" align="center">
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
                                        <Typography variant="h4" color="textPrimary" align="center">
                                            {like}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid
                                    container
                                    justify="space-between"
                                    alignItems="center"
                                    direction="column"
                                >
                                    <Grid item>
                                        <Typography
                                            variant="subtitle1"
                                            align="center"
                                            // key={line}
                                        >
                                            내가 쓴 글
                                        </Typography>
                                        <Typography variant="h4" color="textPrimary" align="center">
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
                                        <Typography variant="h4" color="textPrimary" align="center">
                                            {myReply}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
