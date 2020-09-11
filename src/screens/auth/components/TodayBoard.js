import React from 'react'

const TodayBoard = ({number, title, community}) => {
    return (
        <tr>
            <td>
                {title}
                <span> [ </span>
                {community}
                <span> ]</span>
            </td>
        </tr>
    )
}

export default TodayBoard
