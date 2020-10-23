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
import { Link } from "react-router-dom";
import axios from "axios";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Pagination from "./Pagination";

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
        const { currentPage, limit } = this.state;
        await axios
            .post(URL.board, {
                currentPage,
                limit,
            })
            .then((res) => res.data)
            .then((body) => {
                this.setState({
                    boards: body.board.boards,
                    numOfData: body.board.numOfData,
                });
            });
    };

    componentDidMount() {
        this.requestInfo();
        this.setState({ numOfData: this.state.boards.length });
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevState.currentPage !== this.state.currentPage) {
            await axios
                .post(URL.board, {
                    currentPage: this.state.currentPage,
                    limit: this.state.limit,
                })
                .then((res) => res.data)
                .then((body) => {
                    this.setState({
                        boards: body.board.boards,
                    });
                });
        }
    }

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    };

    render() {
        const { boards, currentPage, limit, numOfData } = this.state;

        const classes = makeStyles({
            table: {
                minWidth: 650,
            },
        });

        return (
            <div>
                <TableContainer style={{ marginRight: 30, minWidth: 770 }}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" style={{color:'gray'}}>No.</TableCell>
                                <TableCell align="center">제목</TableCell>
                                <TableCell align="right">글쓴이</TableCell>
                                <TableCell align="center">등록일</TableCell>
                                <TableCell align="right">조회</TableCell>
                                <TableCell align="right">추천</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {boards.map((row) => (
                                <TableRow key={row.count}>
                                    <TableCell align="left" style={{fontSize:'7px',color:'gray'}}>
                                        {row.count}
                                    </TableCell>

                                    <TableCell
                                        component="th"
                                        scope="row"
                                        style={{
                                            minWidth: 80,
                                            width: "45%",
                                        }}
                                    >
                                        <Link
                                            to={{
                                                pathname: "/detail",
                                                state: { row },
                                            }}
                                        >
                                            {row.board_title}
                                        </Link>
                                    </TableCell>
                                    <TableCell align="right">{row.user_id}</TableCell>
                                    <TableCell align="right">
                                        {new Date(row.board_date).toLocaleString().slice(0,14)}
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
