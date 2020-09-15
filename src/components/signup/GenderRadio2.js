import React from 'react'
import {
    Button,
    ButtonGroup,
    FormControl,
    FormLabel,
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    radioField: {
        background: 'var(--background)',
        color: 'var(--color)',
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

const GenderRadio2 = () => {
    const classes = useStyles()

    const genderChange = () => {
        console.log(gender)
        if (gender === 'female') {
            setColor1(yellow)
            setColor2(defaultColor)
        } else {
            setColor1(defaultColor)
            setColor2(yellow)
        }
    }
    const clickFemale = () => {
        setGender('female', genderChange())
    }
    const clickMale = () => {
        setGender('male', genderChange())
    }

    const [color1, setColor1] = React.useState(defaultColor)
    const [color2, setColor2] = React.useState(defaultColor)
    const [gender, setGender] = React.useState('')

    return (
        <FormControl component="fieldset" style={{marginBottom: 10}}>
            <FormLabel component="legend">Gender</FormLabel>
            <ButtonGroup
                aria-label="outlined button group"
                size="large"
            >
                <Button
                    name="gender"
                    value="female"
                    onClick={clickFemale}
                    className={classes.radioField}
                    style={color1}
                >
                    여성
                </Button>
                <Button
                    name="gender"
                    value="male"
                    onClick={clickMale}
                    className={classes.radioField}
                    style={color2}
                >
                    남성
                </Button>
            </ButtonGroup>
        </FormControl>
    )
}
export default GenderRadio2
