import React, { Component } from 'react';
import { Divider, Container } from '@material-ui/core';

import DMSInput from '../../components/customs/DMSInput';
import DMSButton from '../../components/customs/DMSButton';

//우선 위에 나의레벨, 좋아요, 내가 쓴글, 나의 답변 제외하고만 짜보기 ==> 만드려고 하는거? 나의 프로필.
//세션에 저장된 아이디를 가져와서
//아이디에 해당하는 회원정보 가져오기
//가져온 회원정보 출력하고
//프로필 (사진) & 아이디 ID & 비밀번호 PASSWORD & 이메일 E-MAIL & 나이 AGE & 성별 SEX
//회원정보 수정 (버튼으로 이벤트 적용하기) => 이거 Login이랑 똑같이 하면 될듯 
//근데 여기서 api해서 받아와야하는? => 로그인 페이지에서 연결시켜서 로그인 성공하면 내 정보페이지로 이동할 수 있게.

export default class Myinfo extends Component {

    state = {
    PROFILE : "",
    ID : "",
    PASSWORD : "",
    EMAIL : "",
    AGE : "",
    SEX : "",
}

handleChange = (e) => {
    this.setState({
        [e.target.PROFILE]: e.target.value
    });
}
render() {
    return (
        <form>

            <h3>나의 프로필</h3>

            <input
                placeholder="프로필"
                value={this.state.PROFILE}
                onChange={this.handleChange}
                name="PROFILE"
            />

            <input
                placeholder="아이디"
                value={this.state.ID}
                onChange={this.handleChange}
                name="ID"
            />
            <input
                placeholder="비밀번호"
                value={this.state.PASSWORD}
                onChange={this.handleChange}
                name="PASSWORD"
            />
            <input
                placeholder="EMAIL"
                value={this.state.EMAIL}
                onChange={this.handleChange}
                name="EMAIL"
            />
            <input
                placeholder="AGE"
                value={this.state.AGE}
                onChange={this.handleChange}
                name="AGE"
            />
            <input
                placeholder="SEX"
                value={this.state.SEX}
                onChange={this.handleChange}
                name="SEX"
            />
            <div>
            {this.state.PROFILE}
            {this.state.ID}
            {this.state.PASSWORD}
            {this.state.EMAIL}
            {this.state.AGE}
            {this.state.SEX}
            </div>

        </form>
    );
}
}

// matrial ui 에서 표타입? 넣어서 일단 보여지게만 한건데 전반적인 수정 필요함 --- 인풋창으로 바꿔서 보여지게만 해야..?
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles({
//     table: {
//         minWidth: 650,
//     },
// });

// function createData(name, info) {
//     return { name, info };
// }

// const rows = [
//     createData('PROFILE', 0),
//     createData('ID', 0),
//     createData('PASSWORD', 0),
//     createData('EMAIL', 0),
//     createData('AGE', 0),
//     createData('SEX', 0)
// ];

// export default function AcccessibleTable() {
//     const classes = useStyles();
//     return (
//         <TableContainer component={Paper}>
//             <Table className={classes.table} aria-label="caption table">
//                 <caption>회원정보 수정</caption>
//                 <TableHead>
//                     <TableRow>
//                         <h3>나의 프로필</h3>
//                         <TableCell align="center">나의 프로필</TableCell> 
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {rows.map((row) => (
//                         <TableRow key={row.name}>
//                             <TableCell component="th" scope="row">
//                                 {row.name}
//                             </TableCell>
//                             <TableCell align="left">{row.info}</TableCell>
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// }


// function Myinfo() {
//   const history = useHistory();
//   const currentUser = useQuery<ICurrentUserData>(GET_CURRENT_USER);
//   const user = currentUser.data?.user; 근데 이거 쿼리 어케넣음?

//   if (user === null) history.replace("/login");

//   return (
//     <div>
//       <h2>Myinfo</h2>
//       <h4>ID</h4>
//       <div>{user?.ID}</div>
//       <h4>Token</h4>
//       <div>{user?.token}</div>
//       <h4>Name</h4>
//       <div>{user?.name}</div>
//     </div>
//   );
// }

// export default Myinfo; */}
// 이것도 유저에서 API 받아와야 가능한거 같은데 일단 참고용
// function Myinfo({ user }) {
//     const { email, password, name } = user || {}
//     return (
//         <>
//             <h1>Myinfo</h1>
//             <dt>Email</dt>
//             <dd>{email}</dd>
//             <dt>Password</dt>
//             <dd>{password}</dd>
//             <dt>Name</dt>
//             <dd>{name}</dd>
//         </>
//     )
// }

// export default Myinfo

{/* <input type="button" value="회원정보 변경" onclick="changeForm(0)"> */ }