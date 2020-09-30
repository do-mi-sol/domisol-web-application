import React, {Component} from 'react'
import {Container} from '@material-ui/core'

import MyBar from '../../components/myinfo/MyBar'
import MyProfile from '../../components/myinfo/MyProfile'

import '../../assets/css/Myinfo.css'

export default class Myinfo2 extends Component {
    state = {
        profile: '/broken-image.jpg',
        id: '똑똑한 라이언',
        name: '강민정',
        password: '123456',
        email: 'kang123@likelion.org',
        age: '20',
        gender: '여성',
        myLevel: 5,
        myWritten: 1,
        like: 2,
        myReply: 3,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.PROFILE]: e.target.value,
        })
    }

    render() {
        const {
            profile,
            id,
            name,
            email,
            age,
            gender,
            myLevel,
            myWritten,
            like,
            myReply,
        } = this.state
        return (
            <Container
                maxWidth="xl"
                disableGutters
                style={{
                    minHeight: '90vh',
                    margin: 0,
                    marginBottom: '25%',
                }}
            >
                <MyBar
                    button1Color="None"
                    link1="/myinfo"
                    profile={profile}
                    id={id}
                    myLevel={myLevel}
                    myWritten={myWritten}
                    like={like}
                    myReply={myReply}
                />
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
                    <MyProfile
                        id={this.state.id}
                        name={name}
                        email={email}
                        gender={gender}
                        profile={profile}
                        age={age}
                    />
                </Container>
            </Container>
        )
    }
}
