import React from 'react'

const TodayReplyboard = ({number, reply, community}) => {
    return (
        <tr>
            <td>
                {reply}
                <span> [ </span>
                {community}
                <span> ]</span>
            </td>
        </tr>
    )
}
export default TodayReplyboard
