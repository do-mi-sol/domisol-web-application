import React, { Component } from "react"

class Counter extends Component {
  state = {
    number: 0,
  }

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1,
    })
  }

  //   handleDecrease = () => {
  //     this.setState({
  //       number: this.state.number - 1,
  //     })
  //   }

  render() {
    return (
      <div>
        <button onClick={this.handleIncrease} type="button" className="btn btn-danger btn-sm">
          <span className="glyphicon glyphicon-heart"></span> Heart {this.state.number}
        </button>
      </div>
    )
  }
}

export default Counter
