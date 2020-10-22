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
export default class Notice extends Component {
    state = {
        currentPage: 1,
        limit: 5, // 한페이지에 보이는 data의 limit
        numOfData: 0,
        pageArr: [],
        boards: [
            {
                number: '1001',
                id: '관리자',
                title: '공지사항',
                box:'네티켓을 지켜주세요',
                time: '14:10',
                views: 1000,
            },
            {
                number: '1002',
                id: '관리자',
                title: '공지사항',
                box:'네티켓을 지켜주세요',
                time: '14:10',
                views: 1000,
            },
            {
                number: '1003',
                id: '관리자',
                title: '공지사항',
                box:'네티켓을 지켜주세요',
                time: '14:10',
                views: 100,
            },
            {
                number: '1004',
                id: '관리자',
                title: '공지사항',
                box:'네티켓을 지켜주세요',
                time: '14:10',
                views: 100,
            },
            {
                number: '1005',
                id: '관리자',
                title: '공지사항',
                box:'네티켓을 지켜주세요',
                time: '14:10',
                views: 100,
            },
            {
                number: '1006',
                id: '관리자',
                title: '공지사항',
                box:'네티켓을 지켜주세요',
                time: '14:10',
                views: 100,
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
                    style={{marginRight: 30, minWidth: 480}}
                >
                    <Table
                        className={classes.table}
                        aria-label="simple table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">
                                    
                                </TableCell>

                                <TableCell align="center">
                                    제목
                                </TableCell>
                                <TableCell align="right">
                                    
                                </TableCell>
                                <TableCell align="right">
                                    조회
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
                                            width: '50%',
                                        }}
                                    >
                                        {row.title}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.views}
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