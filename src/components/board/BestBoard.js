import React, {Component} from 'react'
import {
    TableRow,
    TableCell,
    TableContainer,
    Table,
    TableHead,
    TableBody,
} from '@material-ui/core'

import {makeStyles} from '@material-ui/core/styles'
import paginate from './Paginate'
export default class BestBoard extends Component {
    state = {
        currentPage: 1,
        limit: 5, // 한페이지에 보이는 data의 limit
        numOfData: 0,
        pageArr: [],
        boards: [
            {
                number: '101',
                gender: 'female',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                number: '102',
                gender: 'male',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                number: '112',
                gender: 'male',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                number: '122',
                gender: 'male',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                number: '123',
                gender: 'female',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                number: '104',
                gender: 'female',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                number: '105',
                gender: 'female',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                number: '106',
                gender: 'female',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                number: '107',
                gender: 'female',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                number: '108',
                gender: 'female',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                number: '109',
                gender: 'male',
                id: '강민정',
                title: '글제목2',
                time: '05:10',
                likes: 5,
                hits: 1000,
                comments: 30,
            },
        ],
    }

    componentDidMount() {
        this.setState({numOfData: this.state.boards.length})
    }

    render() {
        const {boards, currentPage, limit} = this.state
        const classes = makeStyles({
            table: {
                minWidth: 650,
            },
        })
        const sliceBoards = paginate(boards, currentPage, limit)

        return (
            <div>
                <TableContainer
                    style={{marginRight: 30, minWidth: 800}}
                >
                    <Table
                        className={classes.table}
                        aria-label="simple table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">
                                    글 번호
                                </TableCell>

                                <TableCell align="center">
                                    제목
                                </TableCell>
                                <TableCell align="right">
                                    글쓴이
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sliceBoards.map((row) => (
                                <TableRow key={row.number}>
                                    <TableCell align="left">
                                        {row.number}
                                    </TableCell>

                                    <TableCell
                                        component="th"
                                        scope="row"
                                        style={{
                                            minWidth: 70,
                                            width: '80%',
                                        }}
                                    >
                                        {row.title}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.id}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}
