import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Typography,Paper} from '@material-ui/core'

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


    render() {
        return (
            <div className="board-container">
                <div className="board-center-container"></div>
                <Paper elevation={3} style={{width:'80%', minWidth:'1300px',padding:40, borderRadius:30, marginBottom:50}}>
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
                        </Paper>  
                
                        <Paper elevation={3} style={{width:'80%', minWidth:'1300px', padding:40,paddingBottom:20,
                             borderRadius:30, marginBottom:50}}>
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
                            베스트 게시판
                        </Typography>
                    </div>{' '}
                    <div className="board-right-container">
                        
                        {/* <div className="board-button-container"></div> */}
                        <BestBoard />
                    </div>
                </div>
                </Paper>
                <Paper elevation={3} style={{width:'80%', minWidth:'1300px', padding:40, paddingBottom:20,
                 borderRadius:30}}>
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
                            공지사항
                        </Typography>
                    </div>{' '}
                    <div className="board-right-container">
                        <Notice/>
                    </div>
                </div></Paper>
            </div>
        )
    }
}
