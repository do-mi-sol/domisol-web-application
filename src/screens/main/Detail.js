import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Paper, Container } from "@material-ui/core";
import axios from "axios";

// import "bootstrap/dist/css/bootstrap.min.css";
import '../../assets/css/Detail.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Comment from "../../components/detail/Comment";
import Counter from "../../components/detail/Counter";

import URL from "../../NET";
import DMSButton from "../../components/customs/DMSButton";

export default class Detail extends Component {
    state = {
        comments: [],
        data:{
            number: '101',
            id: '강민정',
            gender: 'female',
            title: '글제목은 무엇으로 지으면 좋을까',
            time: '05:10',
            box:'게시글 내용입니다리리리자로 끝나는 말은 개나리 가오리 그리고... 대머리 용서는 곧 사랑이다.고결하고 아름다운 사랑의 형태이다.사랑이 없는 사람은 쉽게 용서하지 못한다.용서는 평화와 행복을 그 보답으로 준다.그대, 용서함으로써 행복 하라!용감한 자만이 용서할 줄 알고비겁한 자는 용서하지 않는다.용서는 남에게는 자주 베풀지만자신에게는 베풀지 마라.누군가가 당신에게 피해를 입혔다면인내심을 가지고 그들을 대하라.',
            fileName:'파일 이름입니다리',
            heart: 5,
            views: 1000,
        }
        
    };

    requestInfo = async () => {
        await axios
            .post(URL.comment)
            .then((res) => res.data)
            .then((body) => {
                this.setState({
                    comments: body.data.comment,
                });
            });
    };

    componentDidMount() {
        this.requestInfo();
    }

    render() {
        const { comments,data } = this.state;
        console.log(comments);
        return (
            <div>
                <Container style={{marginTop: 30,
                        marginBottom: 20,
                        paddingTop: "10vh",
                        paddingBottom: "20vh",
                        minHeight: "90vh",
                        minWidth:500,
                        }}>
                    <Paper
                        elevation={3}
                        style={{ width: "100%", padding: 40, borderRadius: 30, marginBottom: 50 }}
                    >
                        <div container="col-sm-12">
                            <div className="row ">
                                <div className="col-sm-6">
                                    <section className="detail-boardtext">
                                        <h6>
                                            도미솔 {data.number}번째 글
                                        </h6>
                                        <h2>{data.title}</h2>
                                        <hr/>
                                        <div className='detail-view' style={{minHeight:380}}>
                                            <div className='detail-rowWrapper' style={{justifyContent:'space-between'}}>
                                                <div className='detail-rowWrapper'>
                                                <h5>{data.id}</h5>
                                        {data.gender === 'male' ? (
                                            <FontAwesomeIcon
                                                icon={'male'}
                                                style={{
                                                    color: 'skyblue',
                                                }}
                                            />
                                        ) : (
                                            <FontAwesomeIcon
                                                icon={'female'}
                                                style={{
                                                    color: 'pink',
                                                    position:'relative',
                                                    top:5, left:3
                                                }}
                                            />
                                        )}
                                        </div><p>{data.time} </p>
                                            </div>
                                        
                                    
                                        <p>
                                            {data.box}
                                        </p>
                                        </div>
                                        <hr/>
                                        <div className='detail-rowWrapper'style={{justifyContent:'space-between'}}>
                                            <p>조회 : {data.views}</p>
                                        <Counter/></div>
                                        
                                    </section>
                                </div>
                                <section className="col-sm-6 ">
                                    <img
                                        src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20110108_7%2Fwooroo88_1294461731368Btxio_JPEG%2F17773_S08_092951.jpg&type=sc960_832"
                                        alt="Boardpic"
                                        width="100%"
                                        height="550px"
                                    />
                                </section>
                            </div>
                        </div>
                    </Paper>

                    <h4>Leave a comment:</h4>
                    <Form role="form">
                        <div className='detail-rowWrapper'>
                            <div className="form-group">
                            <textarea className="form-control" rows="3" required></textarea>
                        </div>
                        <DMSButton height='80%'>등록</DMSButton>
                        {/* <button type="submit" className="btn btn-warning btn-lg">등록</button> */}
                        </div>
                        
                    </Form>
                    <div>
                        {comments.map((value) => (
                            <Comment
                                name={value.user_id}
                                date={value.comment_date}
                                text={value.comment_box}
                            ></Comment>
                        ))}
                    </div>
                    <br></br>
                </Container>
            </div>
        );
    }
}
