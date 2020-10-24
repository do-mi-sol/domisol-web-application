import React, { Component } from "react";
import axios from "axios";

import URL from "../../NET";

export default class Counter extends Component {
    commentHeart = async () => {
        const token = await localStorage.getItem("token");
        const bearer = `Bearer ${token}`;
        const { board_number } = this.props.location.state.row;

        await axios
            .post(
                URL.boardheart,
                { board_number },
                {
                    headers: {
                        Authorization: bearer,
                    },
                }
            )
            .then((res) => res.data)
            .then((body) => {
                console.log(body);
                if (body.success) {
                    this.setState({
                        board_heart: body.data.board_heart,
                    });
                    alert("하트를 받았어요!");
                    window.location.reload();
                } else {
                    alert(body.message);
                }
            });
    };

    render() {
        return (
            <div>
                <button
                    onClick={this.handleIncrease}
                    type="button"
                    className="btn btn-danger btn-sm"
                >
                    <span className="glyphicon glyphicon-heart"></span> Heart
                </button>
            </div>
        );
    }
}
