import React, {Component} from 'react'
import {Container} from '@material-ui/core'

import MyBar from '../../components/myinfo/MyBar'
import MyProfile from '../../components/myinfo/MyProfile'

import '../../assets/css/Myinfo.css'

export default class Myinfo2 extends Component {
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
                style={{
                    minHeight: '90vh',
                    margin: 0,
                }}
            >
                <MyBar button1Color="None" link1="/myinfo" />
                <Container
                    style={{
                        width: '80%',
                        minWidth: 900,
                        marginTop: '5%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <MyProfile />
                </Container>
            </Container>
        )
    }
}
