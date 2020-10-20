import React from "react";
import Counter from "./Counter";
// import moment from "moment";

const Comment = ({ name, date, text }) => {
    return (
        <div className="row">
            <div className="col-sm-10">
                <h4>
                    {name}
                    &nbsp; &nbsp;
                    <small>{date}</small>
                </h4>

                <p>{text}</p>
                <Counter></Counter>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
    );
};
export default Comment;
