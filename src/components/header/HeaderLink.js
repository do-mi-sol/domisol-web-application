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
            <AppBar position="sticky" style={{ backgroundColor: "#c2bab2", height: 60, }}>
                <Toolbar>
                    
                    <img src={require('../../assets/images/Logo4.png')} alt="logo" width='30' style={{marginRight:5,marginBottom:4}}/>
                    <h4>DoMiSol</h4>
                    <Button href="/" style={{ marginLeft: 10 }}>
                        HOME
                    </Button>
                    <Button href="/board">BOARD</Button>
                    <Button href="/write">WRITE</Button>
                    {/* <Button href="/detail">DETAIL</Button> */}

                    {token != null && <Button children="Account" href="/myinfo" style={{marginRight:7,backgroundColor:"#ebe9e6"}} />}
                    {token == null && <Button children="Login" href="/login" style={{backgroundColor:"whitesmoke"}}  />}
                    {token != null && (
                        <Button children="Logout" onClick={this.logout} style={{color:"white",backgroundColor:"#a19588"}} />
                    )}
                </Toolbar>
            </AppBar>
        );
    }
}
