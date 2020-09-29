import React, {Component} from 'react';
import {Container} from '@material-ui/core';
// import DMSButton from '../../components/customs/DMSButton'

import MyBar from '../../components/myinfo/MyBar';
import MyWritten from '../../components/myinfo/MyWritten';
import MyReply from '../../components/myinfo/MyReply';

import '../../assets/css/Myinfo.css';

export default class Myinfo extends Component {
  state = {
    profile: '/broken-image.jpg',
    id: '똑똑한 사람',
    name: '강민정',
    password: '123456',
    email: 'kang123@likelion.org',
    age: '20',
    gender: '여성',
    myLevel: 5,
    myWritten: 1,
    like: 2,
    myReply: 3,
  };

  handleChange = e => {
    this.setState ({
      [e.target.PROFILE]: e.target.value,
    });
  };

  render () {
    const {profile, id, myLevel, myWritten, like, myReply} = this.state;
    return (
      <Container
        maxWidth="xl"
        disableGutters
        style={{
          minHeight: '90vh',
          margin: 0,
        }}
      >
        <MyBar
          button2Color="None"
          link2="/myinfo2"
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
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <MyWritten />
          <MyReply />
        </Container>
      </Container>
    );
  }
}
