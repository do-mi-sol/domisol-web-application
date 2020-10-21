import React, { Component } from "react";
import {
    TableRow,
    TableCell,
    TableContainer,
    Table,
    TableHead,
    TableBody,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Pagination from "./Pagination";
import paginate from "./Paginate";

import URL from "../../NET";

export default class MainBoard extends Component {
    state = {
        currentPage: 1,
        limit: 10,
        numOfData: 0,
        pageArr: [],
        boards: [],
    };

    requestInfo = async () => {
        const { currentPage, limit, boards } = this.state;
        await axios
            .post(URL.board, {
                currentPage,
                limit,
            })
            .then((res) => res.data)
            .then((body) => {
                console.log(body);
                this.setState({
                    boards: body.board.boards,
                });
            });
    };

    componentDidMount() {
        this.requestInfo();

        this.setState({ numOfData: this.state.boards.length });
    }

    handlePageChange = (page) => {
        this.setState({ currentPage: page }); // 페이지 수 클릭 시 현재 페이지 변경
    };

    render() {
        const { boards, currentPage, limit, numOfData } = this.state;
        console.log(boards);

        const classes = makeStyles({
            table: {
                minWidth: 650,
            },
        });
        const sliceBoards = paginate(boards, currentPage, limit);

        return (
            <div>
                <TableContainer style={{ marginRight: 30, minWidth: 830 }}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">글 번호</TableCell>

                                <TableCell align="center">제목</TableCell>
                                <TableCell align="right">글쓴이</TableCell>
                                <TableCell align="right">성별</TableCell>
                                <TableCell align="right">시간</TableCell>
                                <TableCell align="right">조회</TableCell>
                                <TableCell align="right">추천</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sliceBoards.map((row) => (
                                <TableRow key={row.number}>
                                    <TableCell align="left">{row.number}</TableCell>

                                    <TableCell
                                        component="th"
                                        scope="row"
                                        style={{
                                            minWidth: 80,
                                            width: "50%",
                                        }}
                                    >
                                        {row.board_title}
                                    </TableCell>
                                    <TableCell align="right">{row.user_id}</TableCell>
                                    <TableCell align="right">
                                        {row.gender === "male" ? (
                                            <FontAwesomeIcon
                                                icon={"male"}
                                                style={{
                                                    color: "skyblue",
                                                }}
                                            />
                                        ) : (
                                            <FontAwesomeIcon
                                                icon={"female"}
                                                style={{
                                                    color: "pink",
                                                }}
                                            />
                                        )}
                                    </TableCell>
                                    <TableCell align="right">
                                        {new Date(row.board_date).toLocaleString()}
                                    </TableCell>
                                    <TableCell align="right">{row.board_views}</TableCell>
                                    <TableCell align="right">{row.board_views}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className="board-pagination-container">
                    <Pagination
                        pageSize={limit}
                        itemsCount={numOfData}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </div>
        );
    }
}
