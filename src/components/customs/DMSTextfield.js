import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const Styles = makeStyles((theme) => ({
    container: {
        width: 450,
    },
    root: {
        borderColor: 'orange',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '70ch',
            borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'yellow',
        },
    },
}))

const DMSTextfield = ({label, rows, defaultValue, color = '#ffd400'}) => {
    const classes = Styles()
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    id="outlined-multiline-static"
                    label={label}
                    multiline
                    rows={rows}
                    defaultValue={defaultValue}
                    color="#ffd400"
                    variant="outlined"
                />
            </div>
        </form>
    )
}

export default DMSTextfield
