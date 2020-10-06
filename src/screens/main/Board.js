import React from 'react'
import BestBoard from '../../components/board/BestBoard'
// import MainBoard from '../../components/board/MainBoard'
import TodayReplyBoard from '../../components/board/TodayReplyBoard'
import TodayBoard from '../../components/board/TodayBoard'
import Pagination from '../../components/board/Pagination'
import 'bootstrap/dist/css/bootstrap.css'
import {Button} from 'react-bootstrap'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
//import _ from 'lodash'
import '../../assets/css/Board.css'
//import axios from 'axios' //서버에요청, 정보 긁어옴

export default class Board extends React.Component {
    state = {
        /*******************************데이터 받아오면 없어짐****************************************/
        bestboards: [
            {id: '10001', title: '글제목1'},
            {id: '10002', title: '글제목2'},
            {
                id: '10003',
                title: '글제목3',
            },
        ],
        boards: [
            // {
            //     gender: '성별',
            //     id: 'id',
            //     title: '글제목1',
            //     time: '시간',
            //     likes: '좋아요',
            //     hits: '조회수',
            //     comments: '댓글수',
            // },
            {
                number: '101',
                gender: 'woman',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                number: '102',
                gender: 'woman',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                number: '103',
                gender: 'woman',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                number: '104',
                gender: 'woman',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                number: '105',
                gender: 'woman',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                number: '106',
                gender: 'woman',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                number: '107',
                gender: 'woman',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                number: '108',
                gender: 'woman',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                number: '109',
                gender: 'man',
                id: '강민정',
                title: '글제목2',
                time: '05:10',
                likes: 5,
                hits: 1000,
                comments: 30,
            },
        ],
        todayboards: [
            {
                title: '글제목1',
                community: '뫄뫄게시판',
            },
            {
                title: '글제목2',
                community: '뫄뫄게시판',
            },
            {
                title: '글제목3',
                community: '뫄뫄게시판',
            },
            {
                title: '글제목4',
                community: '뫄뫄게시판',
            },
            {
                title: '글제목5',
                community: '뫄뫄게시판',
            },
        ],
        replyboards: [
            {
                reply: '댓글1',
                community: '뫄뫄게시판',
            },
            {
                reply: '댓글2',
                community: '뫄뫄게시판',
            },
            {
                reply: '댓글3',
                community: '뫄뫄게시판',
            },
            {
                reply: '댓글4',
                community: '뫄뫄게시판',
            },
            {
                reply: '댓글5',
                community: '뫄뫄게시판',
            },
        ],
        pagesize: 10, //한페이지에 보여줄 글 개수
        itemsCount: 10, //글 개수
        currentPage: 1, //현재 페이지
        /*******************************데이터 받아오면 없어짐****************************************/
    }

    handlePageChange = (page) => {
        this.setState({currentPage: page})
    }

    //--------------render-------------------//
    render() {
        const classes = makeStyles({
            table: {
                minWidth: 650,
            },
        })
        const {
            replyboards,
            todayboards,
            bestboards,
            boards,
            length: count,
            pageSize,
            itemsCount,
            currentPage,
        } = this.state

        return (
            <div className="container">
                <div className="board-left-container">
                    <div className="board-name-container">
                        <div>게시판 글 개수:{count}</div>

                        <Button
                            className="board-name-button"
                            variant="warning"
                        >
                            잘하고싶다..연애 게시판
                        </Button>
                    </div>
                    <div className="board-best-board">
                        <div>실시간 베스트</div>
                        <table borders="1">
                            <tbody>
                                <tr className="list-group list-group-flush">
                                    {bestboards.map((row) => (
                                        <td>
                                            <BestBoard
                                                title={row.title}
                                            />
                                            <hr className="board-best-board-line" />
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* <div className="board-mainboard">
                        //메인게시판
                        <table border="1">
                            <thead>
                                <tr>
                                    <th>성별</th>
                                    <th>제목</th>
                                    <th>글쓴이</th>
                                    <th>제목</th>
                                    <th>시간</th>
                                    <th>조회</th>
                                    <th>댓글</th>
                                </tr>
                            </thead>
                            <tbody>
                                {boards.map((row) => (
                                    <tr>
                                        <MainBoard
                                            gender={row.gender}
                                            title={row.title}
                                            id={row.id}
                                            time={row.time}
                                            like={row.like}
                                            hits={row.hits}
                                            comments={row.comments}
                                        />
                                        <hr className="board-main-board-line" />
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <br />
                    </div> */}

                    <TableContainer
                        style={{margin: 10, minWidth: 850}}
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
                                    <TableCell align="right">
                                        성별
                                    </TableCell>
                                    <TableCell>제목</TableCell>
                                    <TableCell align="right">
                                        글쓴이
                                    </TableCell>
                                    <TableCell align="right">
                                        시간
                                    </TableCell>
                                    <TableCell align="right">
                                        조회
                                    </TableCell>
                                    <TableCell align="right">
                                        댓글
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {boards.map((row) => (
                                    <TableRow key={row.number}>
                                        <TableCell align="left">
                                            {row.number}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.gender}
                                        </TableCell>
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            style={{
                                                minWidth: 80,
                                                width: '50%',
                                            }}
                                        >
                                            {row.title}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.id}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.time}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.hits}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.comments}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className="board-pagination-container">
                        {/*페이징*/}
                        <Pagination
                            pageSize={pageSize}
                            itemsCount={itemsCount}
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange}
                        />
                    </div>
                    <div className="board-button-container">
                        <Button
                            className="board-button"
                            variant="warning"
                        >
                            글쓰기
                        </Button>
                    </div>
                </div>
                <div className="board-right-container">
                    <div>오늘의 글 </div>
                    <hr className="board-yellow-line"></hr>
                    <table borders="1">
                        <tbody>
                            <td>
                                {todayboards.map((row) => (
                                    <tr>
                                        <TodayBoard
                                            title={row.title}
                                            community={row.community}
                                        />
                                        <br />
                                    </tr>
                                ))}
                            </td>
                        </tbody>
                    </table>
                    <br />
                    <div>오늘의 톡</div>
                    <hr className="board-yellow-line"></hr>
                    {/**이미지로보여주기,스크롤내려서 보여주기**/}
                    <img
                        className="board-today-talk"
                        alt=""
                        src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9940773359839DFA0D"
                    />
                    <br />
                    <br />
                    {/*오늘의 댓글 게시판 */}
                    <div>오늘의 댓글</div>
                    <hr className="board-yellow-line"></hr>

                    <table borders="1">
                        <tbody>
                            <td>
                                {replyboards.map((row) => {
                                    return (
                                        <tr>
                                            <TodayReplyBoard
                                                reply={row.reply}
                                                community={
                                                    row.community
                                                }
                                            />
                                            {/* <br /> */}
                                        </tr>
                                    )
                                })}
                            </td>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
