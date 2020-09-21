import React, { Component } from 'react';
import { Divider, Container } from '@material-ui/core';

import DMSInput from '../../components/customs/DMSInput';
import DMSButton from '../../components/customs/DMSButton';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, info) {
  return { name, info};
}

const rows = [
    createData('PROFILE', 0),
    createData('ID', 0),
    createData('PASSWORD', 0),
    createData('EMAIL', 0),
    createData('AGE', 0),
    createData('SEX', 0)
];

export default function AcccessibleTable() {
  const classes = useStyles();
  return (
      <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="caption table">
              <caption>회원정보 수정</caption>
              <TableHead>
                  <TableRow>
                      <h3>나의 프로필</h3>
                      {/* <TableCell align="center">나의 프로필</TableCell> */}
                  </TableRow>
              </TableHead>
              <TableBody>
                  {rows.map((row) => (
                      <TableRow key={row.name}>
                          <TableCell component="th" scope="row">
                              {row.name}
                          </TableCell>
                          <TableCell align="left">{row.info}</TableCell>
                      </TableRow>
                  ))}
              </TableBody>
          </Table>
      </TableContainer>
  );
}


// export default class Myinfo extends Component {

//                 <div className="buttonContainer">
//                     <DMSButton
//                         className="button1"
//                         children="회원정보 수정"
//                         variant="contained"
//                         size="large"
//                         width={400}
//                         color="#ffd400"
//                         margin={20}
//                     />
//                 </div>

//                 <Container maxWidth="xs" style={{ marginTop: 30 }}>
//                     <Divider classes="MuiDivider-middle" />
//                 </Container>


//                 </div>
//         );
//     }
// }


// function MyPage() {
//   const history = useHistory();
//   const currentUser = useQuery<ICurrentUserData>(GET_CURRENT_USER);
//   const user = currentUser.data?.user;

//   if (user === null) history.replace("/login");

//   return (
//     <div>
//       <h2>MyPage</h2>
//       <h4>ID</h4>
//       <div>{user?.ID}</div>
//       <h4>Token</h4>
//       <div>{user?.token}</div>
//       <h4>Name</h4>
//       <div>{user?.name}</div>
//     </div>
//   );
// }

// export default MyPage;