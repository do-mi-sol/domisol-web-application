import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Divider,
} from '@material-ui/core'

const useStyles = makeStyles({
    table: {
        minWidth: 400,
        width: 400,
    },
})

function createData(key, isSuccess, title, like) {
    return {key, isSuccess, title, like}
}

const rows = [
    createData(1, '', '색고르기는 어려워~!', 100),
    createData(2, '성공', '빠삐코', 50),
    createData(3, '실패', '월드콘', 80),
    createData(4, '', '빵빠레', 70),
    createData(5, '', '메가톤', 120),
    createData(6, '실패', '더위사냥', 10),
    createData(7, '성공', '스크류바', 58),
]

export default function MyWritten() {
    const classes = useStyles()

    return (
        <TableContainer>
            <Typography component="h2" variant="h6" gutterBottom>
                내가 쓴 글
            </Typography>
            <Divider />
            <Table
                className={classes.table}
                size="small"
                aria-label="a dense table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="left">글 제목</TableCell>
                        <TableCell align="right">좋아요</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.key}>
                            <TableCell align="left">
                                {row.isSuccess}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.title}
                            </TableCell>

                            <TableCell align="right">
                                {row.like}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
