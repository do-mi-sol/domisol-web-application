import React from 'react'
import BestBoard from '../../components/board/BestBoard'
import MainBoard from '../../components/board/MainBoard'
import TodayReplyBoard from '../../components/board/TodayReplyBoard'
import TodayBoard from '../../components/board/TodayBoard'
import Pagination from '../../components/board/Pagination'
import 'bootstrap/dist/css/bootstrap.css'
import {Button} from 'react-bootstrap'
//import _ from 'lodash'
import '../../assets/css/Board.css'
//import axios from 'axios' //서버에요청, 정보 긁어옴

export default class Board extends React.Component {
    state = {
        /*******************************데이터 받아오면 없어짐****************************************/
        bestboards: [
            {
                title: '글제목1',
            },
            {
                title: '글제목2',
            },
            {
                title: '글제목3',
            },
        ],
        boards: [
            {
                gender: '성별',
                id: 'id',
                title: '글제목1',
                time: '시간',
                likes: '좋아요',
                hits: '조회수',
                comments: '댓글수',
            },
            {
                gender: 'woman',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                gender: 'woman',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                gender: 'woman',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                gender: 'woman',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                gender: 'woman',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                gender: 'woman',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                gender: 'woman',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                gender: 'woman',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
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
        pagesize: 3, //한페이지에 보여줄 글 개수
        itemsCount: 10, //글 개수
        currentPage: 1, //현재 페이지
        /*******************************데이터 받아오면 없어짐****************************************/
    }

    handlePageChange = (page) => {
        this.setState({currentPage: page})
    }

    //--------------render-------------------//
    render() {
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
                <div className="left-container">
                    <div className="board-name-container">
                        <div>게시판 글 개수:{count}</div>

                        <Button className="board-name-button" variant="warning">
                            잘하고싶다..연애 게시판
                        </Button>
                    </div>
                    <div className="best-board">
                        <div>실시간 베스트</div>
                        <table borders="1">
                            <tbody>
                                <td class="list-group list-group-flush">
                                    {bestboards.map((row) => (
                                        <tr>
                                            <BestBoard title={row.title} />
                                            <hr className="best-board-line" />
                                        </tr>
                                    ))}
                                </td>
                            </tbody>
                        </table>
                    </div>

                    <div className="mainboard">
                        {/*메인게시판*/}
                        <table borders="1">
                            <tbody>
                                {boards.map((row) => (
                                    <div>
                                        <MainBoard
                                            gender={row.gender}
                                            title={row.title}
                                            id={row.id}
                                            time={row.time}
                                            like={row.like}
                                            hits={row.hits}
                                            comments={row.comments}
                                        />
                                        <hr className="main-board-line" />
                                    </div>
                                ))}
                            </tbody>
                        </table>
                        <br />
                    </div>
                    <div className="pagination-container">
                        {/*페이징*/}
                        <Pagination
                            pageSize={pageSize}
                            itemsCount={itemsCount}
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange}
                        />
                    </div>
                    <div className="button-container">
                        <Button className="button" variant="warning">
                            글쓰기
                        </Button>
                    </div>
                </div>
                <div className="right-container">
                    <div>오늘의 글 </div>
                    <hr className="yellow-line"></hr>
                    <table borders="1">
                        <tbody>
                            <td>
                                {todayboards.map((row) => (
                                    <tr>
                                        <TodayBoard title={row.title} community={row.community} />
                                        <br />
                                    </tr>
                                ))}
                            </td>
                        </tbody>
                    </table>
                    <br />
                    <div>오늘의 톡</div>
                    <hr className="yellow-line"></hr>
                    {/**이미지로보여주기,스크롤내려서 보여주기**/}
                    <img
                        className="today-talk"
                        alt=""
                        src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9940773359839DFA0D"
                    />
                    <br />
                    <br />
                    {/*오늘의 댓글 게시판 */}
                    <div>오늘의 댓글</div>
                    <hr className="yellow-line"></hr>

                    <table borders="1">
                        <tbody>
                            <td>
                                {replyboards.map((row) => {
                                    return (
                                        <tr>
                                            <TodayReplyBoard
                                                reply={row.reply}
                                                community={row.community}
                                            />
                                            <br />
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
