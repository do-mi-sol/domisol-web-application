import React, { Component } from "react";
import { TableRow, TableCell, TableContainer, Table, TableBody } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import paginate from "./Paginate";
export default class Notice extends Component {
    state = {
        currentPage: 1,
        limit: 5, // 한페이지에 보이는 data의 limit
        numOfData: 0,
        pageArr: [],
        boards: [
            {
                number: "1001",
                id: "관리자",
                title: "공지사항(1)",
                box: "네티켓을 지켜주세요",
                time: "14:10",
                views: 1000,
            },
            {
                number: "1002",
                id: "관리자",
                title: "공지사항(2)",
                box: "네티켓을 지켜주세요",
                time: "14:10",
                views: 1000,
            },
            {
                number: "1003",
                id: "관리자",
                title: "공지사항(3)",
                box: "네티켓을 지켜주세요",
                time: "14:10",
                views: 100,
            },
            {
                number: "1004",
                id: "관리자",
                title: "공지사항(4)",
                box: "네티켓을 지켜주세요",
                time: "14:10",
                views: 100,
            },
            {
                number: "1005",
                id: "관리자",
                title: "공지사항(5)",
                box: "네티켓을 지켜주세요",
                time: "14:10",
                views: 100,
            },
        ],
    };

    componentDidMount() {
        this.setState({ numOfData: this.state.boards.length });
    }

    render() {
        const { boards, currentPage, limit } = this.state;
        const classes = makeStyles({
            table: {
                minWidth: 650,
            },
        });
        const sliceBoards = paginate(boards, currentPage, limit);

        return (
            <div>
                <TableContainer style={{ marginRight: 30, minWidth: 480 }}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableBody>
                            {sliceBoards.map((row) => (
                                <TableRow key={row.number}>
                                    <TableCell
                                        align="left"
                                        style={{ fontSize: "10px", color: "#5c5c5c" }}
                                    >
                                        {row.number}
                                    </TableCell>

                                    <TableCell
                                        component="th"
                                        scope="row"
                                        style={{
                                            minWidth: 70,
                                            width: "75%",
                                        }}
                                    >
                                        {row.title}
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        style={{ fontSize: "5px", color: "#d8afaf" }}
                                    >
                                        {row.id}
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
