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
            {
                number: '109',
                id: '설한정',
                gender: 'male',
                title: '부천 그만',
                time: '05:10',
                box:'글 내용입니다아',
                fileName:'파일 이름입니다',
                heart: 5,
                views: 1000,
            },
            {
                number: '110',
                id: '설한정',
                gender: 'male',
                title: '부천 그만',
                time: '05:10',
                box:'글 내용입니다아',
                fileName:'파일 이름입니다',
                heart: 5,
                views: 1000,
            },
            {
                number: '111',
                id: '설한정',
                gender: 'male',
                title: '부천 그만',
                time: '05:10',
                box:'글 내용입니다아',
                fileName:'파일 이름입니다',
                heart: 5,
                views: 1000,
            },
            {
                number: '112',
                id: '설한정',
                gender: 'male',
                title: '부천 그만',
                time: '05:10',
                box:'글 내용입니다아',
                fileName:'파일 이름입니다',
                heart: 5,
                views: 1000,
            },{
                number: '113',
                id: '설한정',
                gender: 'male',
                title: '부천 그만',
                time: '05:10',
                box:'글 내용입니다아',
                fileName:'파일 이름입니다',
                heart: 5,
                views: 1000,
            },
            {
                number: '114',
                id: '최지혜',
                gender: 'female',
                title: '지혜 못본지 백만년',
                time: '05:10',
                box:'지혜아 언제와아아',
                fileName:'파일 이름입니다',
                heart: 5,
                views: 1000,
            },
            {
                number: '115',
                id: '최지혜',
                gender: 'female',
                title: '지혜 못본지 백만년',
                time: '05:10',
                box:'지혜아 언제와아아',
                fileName:'파일 이름입니다',
                heart: 5,
                views: 1000,
            },
            {
                number: '116',
                id: '최지혜',
                gender: 'female',
                title: '지혜 못본지 백만년',
                time: '05:10',
                box:'지혜아 언제와아아',
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
                                <TableCell align="right">
                                    조회
                                </TableCell>
                                <TableCell align="right">
                                    추천
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
                                            width: '60%',
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
                                    <TableCell align="right">
                                        {row.heart}
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
