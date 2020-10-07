import React from "react"

const Comment = ({ name, text, date, img }) => {
  return (
    <div className="row">
      <img
        className="col-sm-2 text-center "
        src={img}
        className="img-circle"
        height="65"
        width="65"
        alt="Avatar"
      />
      <div className="col-sm-10">
        <h4>
          {name}
          <small>{date}</small>
        </h4>
        <p>{text}</p>
        <button type="button" className="btn btn-danger btn-sm">
          <span className="glyphicon glyphicon-heart"></span> Heart
        </button>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  )
}
export default Comment
