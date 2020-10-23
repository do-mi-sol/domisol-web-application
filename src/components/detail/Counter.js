import React, { Component } from "react";

class Counter extends Component {
    // heart = async () => {
    //     const token = await localStorage.getItem("token");
    //     const bearer = `Bearer ${token}`;
    //     await axios
    //         .post(
    //             URL.boardheart,
    //             { board_number },
    //             {
    //                 headers: {
    //                     Authorization: bearer,
    //                 },
    //             }
    //         )
    //         .then((res) => res.data)
    //         .then((body) => {
    //             console.log(body);
    //         });
    // };

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

export default Counter;
