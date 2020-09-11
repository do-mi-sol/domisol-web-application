import React from 'react'

const MainBoard = ({gender, title, id, time, like, hits, comments}) => {
    return (
        <tr>
            <td>{gender}</td>
            <td>{title}</td>
            <td>{id}</td>
            <td>{time}</td>
            <td>{like}</td>
            <td>{hits}</td>
            <td>{comments}</td>
        </tr>
    )
}

export default MainBoard
