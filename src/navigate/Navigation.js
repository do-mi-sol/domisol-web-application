import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Link to="/board">게시판</Link>
                <Link to="/">Home</Link>
                <Link to="/signup">회원가입</Link>
            </div>
        )
    }
}
