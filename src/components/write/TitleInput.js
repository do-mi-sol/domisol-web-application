import React from 'react'
import {TextField, FormControl, Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles(() => ({
    container: {
        width: 650,
        marginLeft:7,
        marginTop:10
    },
    textfield: {
        height: 20,

    },
}))

const TitleInput = ({
    id,
    label,
    helper,
    type,
    onChange,
    value,
    name,
    color = '#ffd400',
}) => {
    const classes = styles()
    return (
        <div>
            <Grid
                container
                spacing={1}
                direction="row"
                alignItems="center"
            >
                <Grid item>
                    <FormControl
                        fullWidth
                        className={classes.container}
                    >
                        <TextField
                            id={id}
                            type={type}
                            name={name}
                            label={label}
                            helperText={helper}
                            margin="dense"
                            variant="outlined"
                            InputProps={{
                                classes: {input: classes.textfield},
                            }}
                            onChange={onChange}
                        />
                    </FormControl>
                </Grid>

     
            </Grid>
        </div>
    )
}

export default TitleInput
