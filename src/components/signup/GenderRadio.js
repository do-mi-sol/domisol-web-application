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
        background: 'var(--background)',
        borderRadius: 3,
        border: 0,
        color: 'var(--color)',
        // height: 48,
    },
})

const yellow = {
    '--background': '#ffd400',
    '--color': 'white',
}
const defaultColor = {
    '--background': 'white',
    '--color': 'black',
}

const GenderRadio = ({value, onChange}) => {
    const classes = useStyles()
    const radiohandleChange = (e) => {
        setColor(e.target.checked ? yellow : defaultColor)
    }
    const [color, setColor] = React.useState(defaultColor)
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
                row
                aria-label="gender"
                name="gender"
                value={value}
                onChange={onChange}
            >
                <FormControlLabel
                    value="female"
                    control={
                        <Radio
                            onChange={radiohandleChange}
                            size="small"
                            style={{
                                color: '#ffd400',
                            }}
                        />
                    }
                    label="Female"
                    labelPlacement="bottom"
                    className={classes.radioField}
                    style={color}
                />
                <FormControlLabel
                    value="male"
                    control={
                        <Radio
                            onChange={radiohandleChange}
                            size="small"
                            style={{
                                color: '#ffd400',
                            }}
                        />
                    }
                    label="Male"
                    labelPlacement="bottom"
                    className={classes.radioField}
                    style={color}
                />
                <FormControlLabel
                    value="other"
                    control={
                        <Radio
                            onChange={radiohandleChange}
                            size="small"
                            style={{
                                color: '#ffd400',
                            }}
                        />
                    }
                    label="Other"
                    labelPlacement="bottom"
                    className={classes.radioField}
                    style={color}
                />
            </RadioGroup>
        </FormControl>
    )
}
export default GenderRadio
