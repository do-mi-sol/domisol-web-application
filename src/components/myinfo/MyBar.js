import React from 'react'
import {Grid, Divider} from '@material-ui/core'

const MyBar = () => {
    return (
        <div className="bar-container">
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                style={{
                    backgroundColor: 'white',
                    width: '80%',
                    maxWidth: '800px',
                    margin: '0, auto',
                }}
            >
                <Grid item>사진</Grid>
                <Grid item>똑똑한 라이언</Grid>

                <Divider orientation="vertical" flexItem />

                <Grid item xs={5}>
                    <Grid
                        container
                        spacing={1}
                        justify="space-between"
                        alignItems="center"
                        direction="row"
                    >
                        <Grid alignItems="center" direction="row">
                            <Grid item>나의 레벨</Grid>
                            <Grid item>좋아요</Grid>
                        </Grid>
                        <Grid alignItems="center" direction="row">
                            <Grid item>내가 쓴 글</Grid>
                            <Grid item>나의 답변</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default MyBar
