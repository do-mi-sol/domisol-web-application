import React, { Component } from "react";
import BestBoard from "../auth/components/BestBoard";
import MainBoard from "../auth/components/MainBoard";
import TodayReplyBoard from "../auth/components/TodayReplyBoard";
import TodayBoard from "../auth/components/TodayBoard";
import Pagination from "../auth/components/Pagination";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import _ from "lodash";
import "../css/Board.css";
import { paginate } from "../auth/components/paginate";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Board extends React.Component {
  state = {
    /*******************************데이터 받아오면 없어짐****************************************/
    bestboards: [
      {
        title: "글제목1",
      },
      {
        title: "글제목2",
      },
      {
        title: "글제목3",
      },
    ],
    boards: [
      {
        gender: "성별",
        id: "id",
        title: "글제목1",
        time: "시간",
        likes: "좋아요",
        hits: "조회수",
        comments: "댓글수",
      },
      {
        gender: "woman",
        id: "최지혜",
        title: "글제목1",
        time: "14:10",
        likes: 2,
        hits: 100,
        comments: 3,
      },
      {
        gender: "woman",
        id: "최지혜",
        title: "글제목1",
        time: "14:10",
        likes: 2,
        hits: 100,
        comments: 3,
      },
      {
        gender: "woman",
        id: "최지혜",
        title: "글제목1",
        time: "14:10",
        likes: 2,
        hits: 100,
        comments: 3,
      },
      {
        gender: "woman",
        id: "최지혜",
        title: "글제목1",
        time: "14:10",
        likes: 2,
        hits: 100,
        comments: 3,
      },
      {
        gender: "woman",
        id: "최지혜",
        title: "글제목1",
        time: "14:10",
        likes: 2,
        hits: 100,
        comments: 3,
      },
      {
        gender: "woman",
        id: "최지혜",
        title: "글제목1",
        time: "14:10",
        likes: 2,
        hits: 100,
        comments: 3,
      },
      {
        gender: "woman",
        id: "최지혜",
        title: "글제목1",
        time: "14:10",
        likes: 2,
        hits: 100,
        comments: 3,
      },
      {
        gender: "woman",
        id: "최지혜",
        title: "글제목1",
        time: "14:10",
        likes: 2,
        hits: 100,
        comments: 3,
      },
      {
        gender: "man",
        id: "강민정",
        title: "글제목2",
        time: "05:10",
        likes: 5,
        hits: 1000,
        comments: 30,
      },
    ],
    todayboards: [
      {
        title: "글제목1",
        community: "뫄뫄게시판",
      },
      {
        title: "글제목2",
        community: "뫄뫄게시판",
      },
      {
        title: "글제목3",
        community: "뫄뫄게시판",
      },
      {
        title: "글제목4",
        community: "뫄뫄게시판",
      },
      {
        title: "글제목5",
        community: "뫄뫄게시판",
      },
    ],
    replyboards: [
      {
        reply: "댓글1",
        community: "뫄뫄게시판",
      },
      {
        reply: "댓글2",
        community: "뫄뫄게시판",
      },
      {
        reply: "댓글3",
        community: "뫄뫄게시판",
      },
      {
        reply: "댓글4",
        community: "뫄뫄게시판",
      },
      {
        reply: "댓글5",
        community: "뫄뫄게시판",
      },
    ],
    pagesize: 3, //한페이지에 보여줄 글 개수
    itemsCount: 10, //글 개수
    currentPage: 1, //현재 페이지
    /*******************************데이터 받아오면 없어짐****************************************/
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  render() {
    const replyboards = this.state.replyboards;
    const todayboards = this.state.todayboards;
    const bestboards = this.state.bestboards;
    const boards = this.state.boards;
    const { length: count } = this.state.boards;
    const pageSize = this.state.pagesize;
    const itemsCount = this.state.itemsCount;
    const currentPage = this.state.currentPage;

    return (
      <div>
        <div>게시판 글 개수:{count}</div>
        <div>잘하고싶다..연애 게시판</div>
        <br />
        <div>실시간 베스트</div>
        <FontAwesomeIcon className="icon" icon="poo" />

        <table borders="1">
          <tbody>
            <ol class="list-group list-group-flush">
              {bestboards.map((row) => (
                <li class="list-group-item">
                  {" "}
                  <BestBoard title={row.title} />
                </li>
              ))}
            </ol>
          </tbody>
        </table>
        <br />
        {/*메인게시판*/}
        <table borders="1">
          <tbody>
            {boards.map((row) => (
              <MainBoard
                gender={row.gender}
                title={row.title}
                id={row.id}
                time={row.time}
                like={row.like}
                hits={row.hits}
                comments={row.comments}
              />
            ))}
          </tbody>
        </table>
        <br />
        {/*페이징*/}
        <Pagination
          pageSize={pageSize}
          itemsCount={itemsCount}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />

        <div>오늘의 글 </div>
        <table borders="1">
          <tbody>
            <ol>
              {todayboards.map((row) => (
                <li>
                  <TodayBoard title={row.title} community={row.community} />
                </li>
              ))}
            </ol>
          </tbody>
        </table>
        <br />
        <div>오늘의 톡</div>
        {/**이미지로보여주기,스크롤내려서 보여주기**/}
        <img src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9940773359839DFA0D" />
        <br />
        <br />
        {/*오늘의 댓글 게시판 */}
        <div>오늘의 댓글</div>
        <table borders="1">
          <tbody>
            <ol>
              {replyboards.map((row) => {
                return (
                  <li>
                    <TodayReplyBoard
                      reply={row.reply}
                      community={row.community}
                    />
                  </li>
                );
              })}
            </ol>
          </tbody>
        </table>
        <button type="button" class="btn btn-warning">
          글쓰기
        </button>
      </div>
    );
  }
}
