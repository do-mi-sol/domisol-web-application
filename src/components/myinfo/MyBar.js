import React from "react";
import { Grid, Divider, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DMSButton from "../../components/customs/DMSButton";

const useStyles = makeStyles((theme) => ({
    barContainer: {
        backgroundColor: "#ffea80",
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
        width: "70%",
        minWidth: 800,
        backgroundColor: "white",
        margin: theme.spacing(2),
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        right: "25%",
    },
}));
const MyBar = ({
    profile,
    id,
    myLevel,
    myWritten,
    like,
    myReply,
    button1Color,
    button2Color,
    link1,
    link2,
    clickMyWritten,
    clickMyProfile,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.barContainer}>
            <Grid
                container
                direction="row"
                spacing={5}
                justify="space-around"
                alignItems="center"
                className={classes.bar}
            >
                {/* 이미지 */}
                <Grid item>
                    <Avatar src={profile} className={classes.large} />
                </Grid>

                {/* 아이디 */}
                <Grid item>
                    <Typography variant="h6" color="textPrimary">
                        {id}
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
                        className={classes.innerGrid}
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
};

export default MyBar;
