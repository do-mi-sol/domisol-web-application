import React from 'react'
import {
    makeStyles,
    InputLabel,
    Select,
    FormControl,
} from '@material-ui/core'

const range = (start, end) => {
    var arr = []
    var length = end - start
    for (var i = 0; i <= length; i++) {
        arr[i] = start
        start++
    }
    return arr
}
const make_ageArr = () => {
    const listItems = range(10, 100).map((age) => (
        <option value={{age}} key={age.toString()}>
            {age}
        </option>
    ))
    return listItems
}
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}))
const DMSSelectAge = ({age, handleChange}) => {
    const age_array = make_ageArr()
    const classes = useStyles()
    return (
        <FormControl
            variant="outlined"
            className={classes.formControl}
        >
            <InputLabel htmlFor="outlined-age-native-simple">
                Age
            </InputLabel>
            <Select
                native
                value={age}
                onChange={handleChange}
                label="Age"
                inputProps={{
                    name: 'age',
                    id: 'outlined-age-native-simple',
                }}
            >
                <option aria-label="None" value="" />
                {age_array}
            </Select>
        </FormControl>
    )
}

export default DMSSelectAge
