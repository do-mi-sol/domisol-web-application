// let host = "http://localhost:9001";
let host = "https://domisolserver.herokuapp.com";

let URL = {
    login: `${host}/api/user/login`,
    signup: `${host}/api/user/signup`,
    account: `${host}/api/user/account`,
    idmodify: `${host}/api/user/account/idmodify`,
    passwordmodify: `${host}/api/user/account/passwordmodify`,
    withdrawal: `${host}/api/user/account/withdrawal`,
    idfind: `${host}/api/user/find/idfind`,
    passwordfind: `${host}/api/user/find/passwordfind`,

    board: `${host}/api/board`,
    boardwrite: `${host}/api/board/write`,
    boardview: `${host}/api/board/view`,
    boardheart: `${host}/api/board/heart`,
    boardbest: `${host}/api/board/best`,

    comment: `${host}/api/comment`,
    commentwrite: `${host}/api/comment/write`,
    commentdelete: `${host}/api/comment/delete`,
};

export default URL;
