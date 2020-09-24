import React, {Component} from 'react'
import {Container} from '@material-ui/core'

import MyBar from '../../components/myinfo/MyBar'
// import MyWritten from '../../components/myinfo/MyWritten'

import '../../assets/css/Myinfo.css'

export default class Myinfo extends Component {
    state = {
        PROFILE: '',
        ID: '',
        PASSWORD: '',
        EMAIL: '',
        AGE: '',
        SEX: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.PROFILE]: e.target.value,
        })
    }
    render() {
        return (
            <Container
                maxWidth="xl"
                disableGutters
                style={{minHeight: '90vh'}}
            >
                <MyBar />
                {/* <Button>나의 글</Button> */}
                {/* <MyWritten /> */}
            </Container>
        )
    }
}
