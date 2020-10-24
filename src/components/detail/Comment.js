import React from "react";
import Counter from "./Counter";
import "../../assets/css/Detail.css";

const Comment = ({ name, date, text }) => {
    return (
        <div className="comment-row">
            <div className="col-sm-10">
                <h5>
                    {name}
                    &nbsp; &nbsp;
                    <small style={{ fontSize: 10 }}>{date}</small>
                </h5>

                <p>{text}</p>
                <Counter />
            </div>
            <hr style={{ width: "98%" }} />
        </div>
    );
};
export default Comment;
