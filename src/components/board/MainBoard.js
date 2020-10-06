import React from 'react'
import {TableRow, TableCell} from '@material-ui/core'

const MainBoard = ({
    gender,
    title,
    id,
    time,
    like,
    hits,
    comments,
}) => {
    return (
        <TableRow>
            <TableCell>{gender}</TableCell>
            <TableCell>{title}</TableCell>
            <TableCell>{id}</TableCell>
            <TableCell>{time}</TableCell>
            <TableCell>{like}</TableCell>
            <TableCell>{hits}</TableCell>
            <TableCell>{comments}</TableCell>
        </TableRow>
    )
}

export default MainBoard
