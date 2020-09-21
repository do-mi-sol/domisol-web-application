import React, {Component} from 'react'
import {Typography, Container, Link} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            Domisol Website
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

// SnsLink = () => {
//     return (
//         <Typography variant="body2" color="textSecondary">
//             <div>
//                 <Link color="inherit" href="https://material-ui.com/">
//                     Facebook
//                 </Link>
//             </div>{' '}
//             <div>
//                 <Link color="inherit" href="https://material-ui.com/">
//                     Twitter
//                 </Link>
//             </div>{' '}
//             <div>
//                 <Link color="inherit" href="https://material-ui.com/">
//                     Instagram
//                 </Link>
//             </div>{' '}
//         </Typography>
//     )
// }
// export default class Footer extends Component {

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

// render() {
export default function StickyFooter() {
    const classes = useStyle()

    return (
        <footer className={classes.footer}>
            <Container maxWidth="sm">
                <Typography variant="body1">
                    <div>
                        인천광역시 연수구 아카데미로 119 17호관 321호
                        멋쟁이 사자처럼
                    </div>
                    <div>EMAIL Domisol@likelion.org</div>
                    <div>TEL 032-1234-5678</div>
                </Typography>
                <Copyright />
            </Container>
        </footer>
    )
}
