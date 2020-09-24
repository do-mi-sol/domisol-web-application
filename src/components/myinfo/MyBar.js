import React from 'react'
import {Grid, Divider, Avatar, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    barContainer: {
        backgroundColor: '#ffea80',
        padding: theme.spacing(1, 0, 6),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    innerGrid: {
        height: theme.spacing(22),
    },
    bar: {
        width: 800,
        minWidth: 800,
        backgroundColor: 'white',
        margin: theme.spacing(2),
    },
}))

const MyBar = ({Id, MyLevel, MyWritten, Like, MyReply}) => {
    const classes = useStyles()

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
                <Grid item>
                    <Avatar
                        src="/broken-image.jpg"
                        className={classes.large}
                    />
                </Grid>
                <Grid item>
                    <Typography variant="h6" color="textPrimary">
                        똑똑한 라이언
                    </Typography>
                </Grid>

                <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                />

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
                                style={{height: '100%'}}
                            >
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
                                        0
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
                                        0
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
                                    <Typography
                                        variant="h4"
                                        color="textPrimary"
                                        align="center"
                                    >
                                        0
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
                                        0
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default MyBar
