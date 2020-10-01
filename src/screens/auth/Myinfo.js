import React, {Component} from 'react';
import {Container} from '@material-ui/core';

import MyBar from '../../components/myinfo/MyBar';
import MyWritten from '../../components/myinfo/MyWritten';
import MyReply from '../../components/myinfo/MyReply';
import MyProfile from '../../components/myinfo/MyProfile';

import '../../assets/css/Myinfo.css';

export default class Myinfo extends Component {
  state = {
    isProfile: false,
    buttonColor: 'None',
    data: {
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
    },
  };
  handleMyWrittenClick = () => {
    this.setState ({isProfile: false});
  };

  handleMyProfileClick = () => {
    this.setState ({isProfile: true});
  };

  handleChange = e => {
    this.setState ({
      [e.target.PROFILE]: e.target.value,
    });
  };

  render () {
    const {
      profile,
      id,
      myLevel,
      myWritten,
      like,
      myReply,
      name,
      email,
      gender,
      age,
    } = this.state.data;
    let button1Color, button2Color;
    this.state.isProfile
      ? (button1Color = '#ffea80')
      : (button2Color = '#ffea80');

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
          button2Color={button2Color}
          button1Color={button1Color}
          profile={profile}
          id={id}
          myLevel={myLevel}
          myWritten={myWritten}
          like={like}
          myReply={myReply}
          clickMyProfile={this.handleMyProfileClick}
          clickMyWritten={this.handleMyWrittenClick}
        />
        {' '}
        {this.state.isProfile
          ? <Container
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
                id={id}
                name={name}
                email={email}
                gender={gender}
                profile={profile}
                age={age}
              />
            </Container>
          : <Container
              style={{
                width: '80%',
                minWidth: 900,
                marginTop: '5%',
                display: 'flex',
                justifyContent: 'space-around',
                // alignItems: 'center',
              }}
            >
              <MyWritten />
              <MyReply />       {' '}
            </Container>}

      </Container>
    );
  }
}
