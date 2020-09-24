import React from 'react'
import {Typography, Link, Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            Domisol Website
            {'  '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const SnsLink = () => {
    return (
        <div>
            {' '}
            <Typography variant="body2" color="textSecondary">
                <FontAwesomeIcon
                    icon={['fab', 'facebook-f']}
                    style={{marginLeft: 2, marginRight: 18}}
                />
                <Link
                    color="inherit"
                    href="https://www.facebook.com/"
                >
                    Facebook
                </Link>{' '}
            </Typography>
            <Typography variant="body2" color="textSecondary">
                <FontAwesomeIcon
                    icon={['fab', 'twitter']}
                    style={{marginRight: 15}}
                />
                <Link
                    color="inherit"
                    href="https://twitter.com/?lang=ko"
                >
                    Twitter
                </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary">
                <FontAwesomeIcon
                    icon={['fab', 'instagram']}
                    style={{marginLeft: 1, marginRight: 17}}
                />
                <Link
                    color="inherit"
                    href="https://www.instagram.com/"
                >
                    Instagram
                </Link>
            </Typography>
        </div>
    )
}

const useStyle = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
    },
}))

export default function StickyFooter() {
    const classes = useStyle()

    return (
        <div>
            <br />
            <br />
            <br />
            <footer className={classes.footer}>
                <Grid
                    maxwidth="sm"
                    container
                    direction="row"
                    alignItems="center"
                    justify="space-between"
                >
                    <Grid
                        item
                        style={{
                            marginLeft: '7%',
                            marginBottom: 10,
                        }}
                    >
                        <Typography variant="body2">
                            인천광역시 연수구 아카데미로 119 17호관
                            321호 멋쟁이 사자처럼
                        </Typography>
                        <Typography variant="body2">
                            EMAIL Domisol@likelion.org
                        </Typography>
                        <Typography variant="body2">
                            TEL 032-1234-5678
                        </Typography>
                        <Copyright />
                    </Grid>
                    <Grid
                        item
                        style={{
                            marginRight: '10%',
                            marginLeft: '7%',
                        }}
                    >
                        <SnsLink />
                    </Grid>
                </Grid>
            </footer>
        </div>
    )
}
