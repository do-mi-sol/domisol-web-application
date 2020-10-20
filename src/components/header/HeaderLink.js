import React, { Component } from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";

import "../../assets/css/Header.css";

export default class HeaderLink extends Component {
    logout = () => {
        localStorage.removeItem("token");
        alert("로그아웃 되었습니다.");
        window.location.replace("/");
    };

    render() {
        const token = localStorage.getItem("token");

        return (
            <AppBar position="sticky" style={{ backgroundColor: "Gainsboro", height: 60 }}>
                <Toolbar>
                    <h4>DoMiSol</h4>
                    <Button href="/" style={{ marginLeft: 10 }}>
                        HOME
                    </Button>
                    <Button href="/board">BOARD</Button>
                    <Button href="/">WRITE</Button>
                    <Button href="/detail">DETAIL</Button>

                    {token != null && <Button color="white" children="Account" href="/myinfo" />}
                    {token == null && <Button color="white" children="Login" href="/login" />}
                    {token != null && (
                        <Button color="white" children="Logout" onClick={this.logout} />
                    )}
                </Toolbar>
            </AppBar>
        );
    }
}
