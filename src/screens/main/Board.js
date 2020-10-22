import React from "react";
import { Typography, Paper} from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MainBoard from "../../components/board/MainBoard";
import BestBoard from "../../components/board/BestBoard";
import Notice from "../../components/board/Notice";
import DMSButton from "../../components/customs/DMSButton";
import Search from "../../components/customs/Search";

import "../../assets/css/Board.css";

export default class Board extends React.Component {
    state = {
        search: "",
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
        console.log(e.target.value);
    };

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    };

    render() {
        const { search } = this.state;
        return (
            <div className="board-container">
                <div className="board-center-container"></div>

                <Paper
                    elevation={3}
                    style={{
                        // width: "80%",
                        minWidth: "1300px",
                        padding: 40,
                        borderRadius: 30,
                        marginBottom: 50,
                    }}
                >
                    <div className="board-divide-container" style={{width:1200}}>
                        <div className="board-left-container">
                            <hr className="style15" />
                            <Typography
                                variant="h5"
                                style={{
                                    marginTop: "10px",
                                    fontWeight: "bold",
                                }}
                            >
                                도미솔 게시판
                            </Typography>
                        </div>

                        <div className="board-right-container">
                            <div className="board-button-container">
                                <Search onChange={this.handleChange} value={search} />
                                <DMSButton color="#c19393" href="/write" size="large">
                                    글쓰기
                                    <FontAwesomeIcon
                                        icon={"pen"}
                                        style={{
                                            color: "whitesmoke",
                                            marginLeft: "7px",
                                        }}
                                    />
                                </DMSButton>
                            </div>
                            <MainBoard />
                        </div>
                    </div>
                </Paper>
                <div className='board-divide-container' style={{width:1270,minWidth:1250}}>
                <Paper
                    elevation={3}
                    style={{
                        width: "600px",
                        padding: 40,
                        paddingBottom: 20,
                        borderRadius: 20,
                        marginBottom: 50,
                    }}
                >
                    <div className="board-half-container">
                            <hr className="style15" style={{width:350}}/>
                            <Typography
                                variant="h5"
                                style={{
                                    marginTop: "10px",
                                    fontWeight: "bold",
                                }}
                            >
                                베스트 게시판
                            </Typography>
                        </div>
                            <BestBoard />

                </Paper>

                 <Paper
                    elevation={3}
                    style={{
                        width: "600px",
                        padding: 40,
                        paddingBottom: 20,
                        borderRadius: 20,
                    }}
                >
                    <div className="board-half-container">
                            <hr className="style15" style={{width:350}} />
                            <Typography
                                variant="h5"
                                style={{
                                    marginTop: "10px",
                                    fontWeight: "bold",
                                }}
                            >
                                공지사항
                            </Typography>
                        </div>
                            <Notice />
                </Paper>
                </div>
                
               
            </div>
        );
    }
}
