import React, {Component} from 'react'
import {Divider, Container} from '@material-ui/core'

import DMSInput from '../../components/customs/DMSInput'
import DMSButton from '../../components/customs/DMSButton'
import MyBar from '../../components/myinfo/MyBar'

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
            <Container>
                <MyBar />
            </Container>
        )
    }
}
