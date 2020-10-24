import React, { Component } from "react";
import { TableRow, TableCell, TableContainer, Table, TableBody } from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import URL from "../../NET";

export default class BestBoard extends Component {
    state = {
        currentPage: 1,
        limit: 5,
        numOfData: 0,
        pageArr: [],
        boards: [],
    };

    requestInfo = async () => {
        const { currentPage, limit } = this.state;
        await axios
            .post(URL.boardbest, {
                currentPage,
                limit,
            })
            .then((res) => res.data)
            .then((body) => {
                this.setState({
                    boards: body.data.bestboard.boards,
                    numOfData: body.data.bestboard.numOfData,
                });
            });
    };

    boardView = async (number) => {
        await axios
            .post(URL.boardview, {
                board_number: number,
            })
            .then((res) => res.data)
            .then((body) => {
                console.log(body);
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

    render() {
        const { boards } = this.state;
        const classes = makeStyles({
            table: {
                minWidth: 650,
            },
        });

        return (
            <div>
                <TableContainer style={{ marginRight: 30, minWidth: 480 }}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableBody>
                            {boards.map((row) => (
                                <TableRow key={row.board_number}>
                                    <TableCell
                                        align="left"
                                        style={{ fontSize: "10px", color: "#5c5c5c" }}
                                    >
                                        {row.count}
                                    </TableCell>

                                    <TableCell
                                        component="th"
                                        scope="row"
                                        style={{
                                            minWidth: 70,
                                            width: "75%",
                                        }}
                                    >
                                        <Link
                                            to={{
                                                pathname: "/detail",
                                                state: { row },
                                            }}
                                            onClick={() => this.boardView(row.board_number)}
                                        >
                                            {row.board_title}
                                        </Link>
                                    </TableCell>

                                    <TableCell
                                        align="right"
                                        style={{ fontSize: "5px", color: "#d8afaf" }}
                                    >
                                        추천 {row.heartnum}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}
