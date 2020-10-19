import React, { Component } from "react";
import { Container } from "@material-ui/core";
import { Tabs, Panel, useTabState } from "@bumaga/tabs";

import MyBar from "../../components/myinfo/MyBar";
import MyWritten from "../../components/myinfo/MyWritten";
import MyReply from "../../components/myinfo/MyReply";
import MyProfile from "../../components/myinfo/MyProfile";
import MyModify from "../../components/myinfo/MyModify";

import "../../assets/css/Myinfo.css";

export default class Myinfo extends Component {
    state = {
        buttonColor: "None",
        profile: "/broken-image.jpg",
        myLevel: 0,
        myWritten: 0,
        like: 0,
        myReply: 0,
    };

    handleChange = (e) => {
        this.setState({
            [e.target.PROFILE]: e.target.value,
        });
    };

    render() {
        const { profile, myLevel, myWritten, like, myReply, name } = this.state;

        const cn = (...args) => args.filter(Boolean).join(" ");

        const Tab = ({ children }) => {
            const { isActive, onClick } = useTabState();
            console.log(isActive);

            return (
                <button className={cn("tab", isActive && "active")} onClick={onClick}>
                    {children}
                </button>
            );
        };

        return (
            <Container
                maxWidth="xl"
                disableGutters
                style={{
                    minHeight: "90vh",
                    margin: 0,
                }}
            >
                <MyBar />

                <Tabs>
                    <div>
                        <div className="tab-list">
                            <Tab>나의 글</Tab>
                            <Tab>나의 정보</Tab>
                            <Tab>나의 정보 수정</Tab>
                        </div>

                        <Panel>
                            <div className="panel-container">
                                <Container
                                    style={{
                                        width: "90%",
                                        minWidth: 900,
                                        display: "flex",
                                        flexWrap: "wrap",
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
                                    <MyProfile />
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
