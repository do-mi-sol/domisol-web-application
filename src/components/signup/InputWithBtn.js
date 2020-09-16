import React from 'react'
import {TextField, FormControl, Grid, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles(() => ({
    container: {
        width: 300,
    },
    textfield: {
        height: 20,
    },
}))

const InputWithBtn = ({
    id,
    label,
    helper,
    type,
    onChange,
    value,
    name,
}) => {
    const classes = styles()
    return (
        <div>
            <Grid
                container
                spacing={1}
                direction="row"
                alignItems="center"
                // justify="center"
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
                <Grid item>
                    <Button
                        children="중복확인"
                        size="small"
                        style={{
                            width: 88,
                            height: 40,
                            backgroundColor: '#ffd400',
                            borderColor: 'white',
                            marginTop: 4,
                            // fontWeight: 'bold',
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default InputWithBtn
