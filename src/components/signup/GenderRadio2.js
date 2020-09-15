import React from 'react'
import {
    Button,
    ButtonGroup,
    FormControl,
    FormLabel,
} from '@material-ui/core'

const GenderRadio2 = () => {
    var state = {
        gender: '',
    }

    const handleChange = (e) => {
        state.gender = e.target.value
        // console.log(state.gender)
    }
    const handleRadioButton = (e) => {
        var target = e.target
        var value = target.value
        const isChecked = target.checked
        console.log(e.target.value) // this undefined. why?!?
        if (isChecked) {
            // remove it from array
            // etc.
        } else {
            // add it to array
            // etc.
        }
    }

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <ButtonGroup aria-label="outlined button group">
                <Button
                    name="gender"
                    value="female"
                    onClick={handleRadioButton}
                    // style={{backgroundColor: '#ffd400'}}
                >
                    여성
                </Button>
                <Button
                    name="gender"
                    value="male"
                    onClick={handleChange}
                >
                    남성
                </Button>
                <Button
                    name="gender"
                    value="others"
                    onClick={handleChange}
                >
                    others
                </Button>
            </ButtonGroup>
        </FormControl>
    )
}
export default GenderRadio2
