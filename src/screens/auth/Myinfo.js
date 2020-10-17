import React, { Component } from "react";
import { Container } from "@material-ui/core";
import axios from "axios";
import { Tabs, Panel, useTabState } from "@bumaga/tabs";

import MyBar from "../../components/myinfo/MyBar";
import MyWritten from "../../components/myinfo/MyWritten";
import MyReply from "../../components/myinfo/MyReply";
import MyProfile from "../../components/myinfo/MyProfile";
import MyModify from "../../components/myinfo/MyModify";

import URL from "../../NET";

import "../../assets/css/Myinfo.css";

export default class Myinfo extends Component {
    state = {
        buttonColor: "None",
        profile: "/broken-image.jpg",
        id: "",
        name: "",
        password: "",
        email: "",
        age: "",
        gender: "",
        myLevel: 5,
        myWritten: 1,
        like: 2,
        myReply: 3,
    };

    handleChange = (e) => {
        this.setState({
            [e.target.PROFILE]: e.target.value,
        });
    };

    async componentDidMount() {
        const token = await localStorage.getItem("token");
        const bearer = `Bearer ${token}`;

        await axios
            .post(URL.account, null, {
                headers: {
                    Authorization: bearer,
                },
            })
            .then((res) => res.data)
            .then((body) => {
                const { user_id, email, name, gender, age } = body.data.user;
                this.setState({
                    id: user_id,
                    email,
                    name,
                    gender,
                    age,
                });
            });
    }

    render() {
        const {
            profile,
            id,
            myLevel,
            myWritten,
            like,
            myReply,
            name,
            email,
            nickname,
            gender,
            age,
        } = this.state;

        const cn = (...args) => args.filter(Boolean).join(' ')

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState()

  return (
    <button className={cn('tab', isActive && 'active')} onClick={onClick}>
      {children}
    </button>
  )
}

        return (
            <Container
                maxWidth="xl"
                disableGutters
                style={{
                    minHeight: "90vh",
                    margin: 0,
                }}
            >
                <MyBar
                    profile={profile}
                    name={name}
                    myLevel={myLevel}
                    myWritten={myWritten}
                    like={like}
                    myReply={myReply}
                />
                <Tabs>
                    <div>
                        <div className="tab-list">
                            <Tab>나의 글</Tab>
                            <Tab>나의 정보</Tab>
                            <Tab>나의 글</Tab>
                        </div>
                        <div className="tabs-border"></div>

                        <Panel>
                            <div className="panel-container">
                                <Container
                                style={{
                                    width: "90%",
                                    minWidth: 900,
                                    display: "flex",
                                    flexWrap:"wrap",
                                    justifyContent: "space-around",
                                }}
                            >
                                <MyWritten />
                                <MyReply />
                            </Container>
                            </div>
                        </Panel>

                        <Panel>
                        <div className="panel-container">
                            <Container
                                style={{
                                    width: "80%",
                                    minWidth: 900,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <MyProfile
                                    id={id}
                                    name={name}
                                    nickname={nickname}
                                    email={email}
                                    gender={gender}
                                    profile={profile}
                                    age={age}
                                />
                            </Container>
                            </div>
                        </Panel>

                        <Panel>
                        <div className="panel-container">
                            <Container
                                style={{
                                    width: "80%",
                                    minWidth: 900,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <MyModify />
                            </Container>
                            </div>
                        </Panel>
                    </div>
                </Tabs>
            </Container>
        );
    }
}
