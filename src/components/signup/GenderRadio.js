import React from 'react'
import {
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    FormLabel,
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    radioField: {
        borderRadius: 3,
        border: 0,
    },
})

const GenderRadio = ({value, onChange}) => {
    const classes = useStyles()
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
                row
                aria-label="gender"
                name="gender"
                onChange={onChange}
            >
                <FormControlLabel
                    value="female"
                    control={
                        <Radio
                            onChange={onChange}
                            size="small"
                            style={{
                                color: '#ffd400',
                            }}
                        />
                    }
                    label="Female"
                    labelPlacement="bottom"
                    className={classes.radioField}
                />
                <FormControlLabel
                    value="male"
                    control={
                        <Radio
                            size="small"
                            style={{
                                color: '#ffd400',
                            }}
                        />
                    }
                    label="Male"
                    labelPlacement="bottom"
                    className={classes.radioField}
                />
            </RadioGroup>
        </FormControl>
    )
}
export default GenderRadio
