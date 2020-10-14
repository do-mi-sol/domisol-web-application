import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Typography} from '@material-ui/core'

import '../../assets/css/Board.css'
import MainBoard from '../../components/board/MainBoard'
import BestBoard from '../../components/board/BestBoard'
import Notice from '../../components/board/Notice'
import DMSButton from '../../components/customs/DMSButton'
import Search from '../../components/customs/Search'
//import axios from 'axios' //서버에요청, 정보 긁어옴

export default class Board extends React.Component {
    state = {
        search:"",
        /*******************************데이터 받아오면 없어짐****************************************/
        bestboards: [
            {key: '10001', id: '10001', title: '베스트) 글제목1'},
            {key: '10001', id: '10002', title: '베스트) 글제목2'},
            {key: '10001', id: '10003', title: '베스트) 글제목3'},
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


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
        console.log(e.target.value)
    }
    handlePageChange = (page) => {
        this.setState({currentPage: page})
    }

    //--------------render-------------------//
    render() {
        return (
            <div className="board-container">
                <div className="board-center-container"></div>
                <div className="board-divide-container">
                        <div className="board-left-container">
                        <hr className="style15" />
                        <Typography
                            variant="h5"
                            style={{
                                marginTop: '10px',
                                fontWeight: 'bold',
                            }}
                        >
                            도미솔 게시판
                        </Typography>
                    </div>{' '}
                    <div className="board-right-container">
                        {/* <hr className="style15" /> */}
                            
                                <div className="board-button-container">
                            <Search onChange ={this.handleChange} value={this.state.search}/>
                            <DMSButton color="#ffea80" href="/write" size="large">글쓰기<FontAwesomeIcon
                                    icon={'pen'}
                                    style={{
                                        color: 'gray',
                                        marginLeft: '7px',
                                    }}
                                /></DMSButton>
                        </div>
                        <MainBoard />
                        
                    </div>
                    
                </div>
                <div className="board-divide-container">
                    <div className="board-left-container">
                        {/* <hr className="pill" /> */}
                        <hr className="style15" />
                        <Typography
                            variant="h5"
                            style={{
                                marginTop: '10px',
                                fontWeight: 'bold',
                            }}
                        >
                            베스트 게시판
                        </Typography>
                    </div>{' '}
                    <div className="board-right-container">
                        {/* <hr className="pill" /> */}
                        <div className="board-button-container"></div>
                        <BestBoard />
                    </div>
                </div>
                <div className="board-divide-container">
                    <div className="board-left-container">
                        {/* <hr className="pill" /> */}
                        <hr className="style15" />
                        <Typography
                            variant="h5"
                            style={{
                                marginTop: '10px',
                                fontWeight: 'bold',
                            }}
                        >
                            공지사항
                        </Typography>
                    </div>{' '}
                    <div className="board-right-container">
                        {/* <hr className="pill" /> */}
                        <div className="board-button-container"></div>
                        <Notice/>
                    </div>
                </div>

                {/* 일단 밑에 . . .
                <div>
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
                                                community={
                                                    row.community
                                                }
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
                        <img
                            className="board-today-talk"
                            alt=""
                            src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9940773359839DFA0D"
                        />
                        <br />
                        <br />
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
                                            </tr>
                                        )
                                    })}
                                </td>
                            </tbody>
                        </table>
                    </div>
                </div> */}
            </div>
        )
    }
}
