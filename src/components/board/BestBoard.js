import React, {Component} from 'react'
import {
    TableRow,
    TableCell,
    TableContainer,
    Table,
    // TableHead,
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
                id: '강민정',
                gender: 'female',
                title: '글제목은 무엇으로 지으면 좋을까',
                time: '05:10',
                box:'게시글 내용입니다리리리자로 끝나는 말은 개나리 가오리 그리고... 대머리',
                fileName:'파일 이름입니다리',
                heart: 5,
                views: 1000,
            },
            {
                number: '102',
                id: '강민정',
                gender: 'female',
                title: '글제목은 무엇으로 지으면 좋을까',
                time: '05:10',
                box:'게시글 내용입니다리리리자로 끝나는 말은 개나리 가오리 그리고... 대머리',
                fileName:'파일 이름입니다리',
                heart: 5,
                views: 1000,
            },
            {
                number: '103',
                id: '강민정',
                gender: 'female',
                title: '글제목은 무엇으로 지으면 좋을까',
                time: '05:10',
                box:'게시글 내용입니다리리리자로 끝나는 말은 개나리 가오리 그리고... 대머리',
                fileName:'파일 이름입니다리',
                heart: 5,
                views: 1000,
            },
            {
                number: '104',
                id: '강민정',
                gender: 'female',
                title: '글제목은 무엇으로 지으면 좋을까',
                time: '05:10',
                box:'게시글 내용입니다리리리자로 끝나는 말은 개나리 가오리 그리고... 대머리',
                fileName:'파일 이름입니다리',
                heart: 5,
                views: 1000,
            },
            {
                number: '105',
                id: '김희연',
                gender: 'female',
                title: '팀장님 짱',
                time: '05:10',
                box:'희연아 언제와아아',
                fileName:'파일 이름입니다',
                heart: 5,
                views: 1000,
            },
            {
                number: '106',
                id: '김희연',
                gender: 'female',
                title: '팀장님 짱',
                time: '05:10',
                box:'희연아 언제와아아',
                fileName:'파일 이름입니다',
                heart: 5,
                views: 1000,
            },
            {
                number: '106',
                id: '김희연',
                gender: 'female',
                title: '팀장님 짱',
                time: '05:10',
                box:'희연아 언제와아아',
                fileName:'파일 이름입니다',
                heart: 5,
                views: 1000,
            },
            {
                number: '107',
                id: '김희연',
                gender: 'female',
                title: '팀장님 짱',
                time: '05:10',
                box:'희연아 언제와아아',
                fileName:'파일 이름입니다',
                heart: 5,
                views: 1000,
            },
            {
                number: '108',
                id: '김희연',
                gender: 'male',
                title: '팀장님 짱',
                time: '05:10',
                box:'희연아 언제와아아',
                fileName:'파일 이름입니다',
                heart: 5,
                views: 1000,
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
                        {/* <TableHead>
                            <TableRow>
                                <TableCell align="left">
                                    
                                </TableCell>

                                <TableCell align="center">
                                    제목
                                </TableCell>
                                <TableCell align="right">
                                    글쓴이
                                </TableCell>
                                <TableCell align="right">
                                    추천
                                </TableCell>
                            </TableRow>
                        </TableHead> */}
                        <TableBody>
                            {sliceBoards.map((row) => (
                                <TableRow key={row.number}>
                                    <TableCell align="left" style={{fontSize:'10px',color:'#5c5c5c'}}>
                                        {row.number}
                                    </TableCell>

                                    <TableCell
                                        component="th"
                                        scope="row"
                                        style={{
                                            minWidth: 70,
                                            width: '75%',
                                        }}
                                    >
                                        {row.title}
                                    </TableCell>
                                    {/* <TableCell align="right">
                                        {row.id}
                                    </TableCell> */}
                                    <TableCell align="right" style={{fontSize:'5px',color:'#d8afaf'}}>
                                        추천 {row.heart}
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
