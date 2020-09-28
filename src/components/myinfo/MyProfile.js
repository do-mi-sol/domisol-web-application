import React from 'react'
import {TextField} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    Container: {
        width: '75%',
        minWidth: 150,
        padding: theme.spacing(1, 0, 0),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space between',
        marginBottom: theme.spacing(1),
    },
    label: {
        marginRight: 10,
        width: '15%',
        fontSize: 22,
    },
}))

const MyProfile = () => {
    const classes = useStyles()
    return (
        <div className={classes.Container}>
            <div className={classes.innerContainer}>
                <span className={classes.label}>ID</span>
                <TextField
                    disabled
                    fullWidth
                    size="medium"
                    // label="ID"
                    defaultValue="likelion323"
                />
            </div>
            <div className={classes.innerContainer}>
                <span className={classes.label}>NAME</span>
                <TextField
                    disabled
                    fullWidth
                    size="medium"
                    defaultValue="강민정"
                />
            </div>
            <div className={classes.innerContainer}>
                <span className={classes.label}>EMAIL</span>
                <TextField
                    disabled
                    fullWidth
                    size="medium"
                    defaultValue="likelion323@likelion.org"
                />
            </div>
        </div>
    )
}

export default MyProfile
