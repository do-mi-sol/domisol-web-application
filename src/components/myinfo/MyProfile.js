import React from 'react'
import {
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Col,
} from 'reactstrap'
import {Avatar} from '@material-ui/core'
import '../../assets/css/MyProfile.css'
import DMSButton from '../../components/customs/DMSButton'

const MyProfile = (props) => {
    return (
        <Form className="profile-form">
            <FormGroup row>
                <Label for="Id" sm={2}>
                    ID
                </Label>
                <Col sm={10}>
                    <Input
                        disabled
                        type="id"
                        name="id"
                        id="Id"
                        value={props.id}
                        // placeholder={id}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="Name" sm={2}>
                    NAME
                </Label>
                <Col sm={10}>
                    <Input
                        disabled
                        type="name"
                        name="name"
                        id="Name"
                        value={props.name}
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="Nickname" sm={2}>
                    NICKNAME
                </Label>
                <Col sm={10}>
                    <Input
                        disabled
                        type="nickname"
                        name="nickname"
                        id="nicknmae"
                        value={props.nickname}
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="Email" sm={2}>
                    EMAIL
                </Label>
                <Col sm={10}>
                    <Input
                        disabled
                        type="email"
                        name="email"
                        id="Email"
                        value={props.email}
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="Password" sm={2}>
                    PASSWORD
                </Label>
                <Col sm={10}>
                    <Input
                        type="password"
                        name="password"
                        id="Password"
                        placeholder="현재 비밀번호를 입력해주세요."
                    />
                    <FormText color="muted">
                        회원정보 변경을 원하시면 현재 비밀번호를
                        정확하게 입력해주세요.
                    </FormText>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="newPassword" sm={2}>
                    New PASSWORD
                </Label>
                <Col sm={10}>
                    <Input
                        type="password"
                        name="password"
                        id="newPassword"
                        placeholder="새 비밀번호를 입력해주세요."
                    />
                    <FormText color="muted">
                        비밀번호는 문자, 숫자, 특수문자를 포함하여
                        8~16자로 입력해주세요.
                    </FormText>
                    <Input
                        className="profile-repassword"
                        type="password"
                        name="password"
                        id="newPassword2"
                        placeholder="새 비밀번호를 다시 입력해주세요."
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="Gender" sm={2}>
                    Gender
                </Label>
                <Col sm={4}>
                    <Input
                        disabled
                        type="text"
                        name="gender"
                        id="Gender"
                        value={props.gender}
                    />
                </Col>
                <Label for="Age" sm={1}>
                    Age
                </Label>
                <Col sm={5}>
                    <Input
                        disabled
                        type="age"
                        name="age"
                        id="Age"
                        value={props.age}
                    />
                </Col>
            </FormGroup>
            <FormGroup row className="profile-imageContainer">
                <Label for="exampleFile" sm={2}>
                    <div className="profile-imageLabel">IMAGE</div>
                </Label>
                <Avatar
                    src="/broken-image.jpg"
                    //   src={require ('../../assets/images/pic2.jpg')}
                    style={{width: 200, height: 200, marginRight: 15}}
                />
                <Col sm={6}>
                    <div className="profile-imageInput">
                        <Input
                            type="file"
                            name="file"
                            id="exampleFile"
                        />
                        <FormText color="muted">
                            프로필 사진으로 사용할 사진을
                            선택해주세요.
                        </FormText>
                    </div>
                </Col>
            </FormGroup>

            {/* 밑에 회원정보수정 버튼 추가로 만들기 */}
            {/* <Button variant="contained" color="primary" >
                회원정보 수정
            </Button> */}
            <div className="infomodify-buttonContainer">
                <DMSButton
                    className="button1"
                    children="회원정보 수정"
                    variant="contained"
                    size="large"
                    // 중앙정렬?
                    radiusBottom={5}
                />
            </div>
        </Form>
    )
}

export default MyProfile

// import {TextField} from '@material-ui/core'
// import {makeStyles} from '@material-ui/core/styles'

// const useStyles = makeStyles((theme) => ({
//     Container: {
//         width: '75%',
//         minWidth: 150,
//         padding: theme.spacing(1, 0, 0),
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     innerContainer: {
//         width: '100%',
//         display: 'flex',
//         justifyContent: 'space-between',
//         marginBottom: theme.spacing(2),
//     },
//     label: {
//         marginRight: 20,
//         width: '20%',
//         fontSize: 20,
//         textAlign: 'center',
//     },
//     password: {
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//         width: '100%',
//         height: theme.spacing(13),
//     },
// }))

// const MyProfile = (image) => {
//     const classes = useStyles()
//     return (
//         <div className={classes.Container}>
//             {/* ID */}
//             <div className={classes.innerContainer}>
//                 <span className={classes.label}>ID</span>
//                 <TextField
//                     disabled
//                     fullWidth
//                     size="medium"
//                     // label="ID"
//                     defaultValue="likelion323"
//                 />
//             </div>
//             {/* NAME */}
//             <div className={classes.innerContainer}>
//                 <span className={classes.label}>NAME</span>
//                 <TextField
//                     disabled
//                     fullWidth
//                     size="medium"
//                     defaultValue="강민정"
//                 />
//             </div>
//             {/* EMAIL */}
//             <div className={classes.innerContainer}>
//                 <span className={classes.label}>EMAIL</span>
//                 <TextField
//                     disabled
//                     fullWidth
//                     size="medium"
//                     defaultValue="likelion323@likelion.org"
//                 />
//             </div>
//             {/* IMAGE */}
//             {/* <div className={classes.innerContainer}>
//                 <span className={classes.label}>IMAGE</span>
//                 <form
//                     id="form1"
//                     action="uploadForm"
//                     method="post"
//                     target="repacatFrame"
//                 >
//                     <input type="file" name="file" />
//                 </form>
//             </div> */}
//             {/* 현재 비밀번호 */}
//             <div className={classes.innerContainer}>
//                 <span className={classes.label}>PASSWORD</span>
//                 <TextField
//                     fullWidth
//                     size="medium"
//                     type="password"
//                     placeholder="현재 비밀번호를 입력해주세요."
//                     helperText="회원 정보 수정을 원하시면 현재 비밀번호를 정확히 입력해주세요."
//                 />
//             </div>
//             {/* 새 비밀번호 */}
//             <div className={classes.innerContainer}>
//                 <span className={classes.label}>NEW PASSWORD</span>
//                 <div className={classes.password}>
//                     <TextField
//                         fullWidth
//                         size="medium"
//                         type="password"
//                         placeholder="새 비밀번호를 입력해주세요."
//                         helperText="비밀번호는 문자, 숫자, 특수문자를 포함하여 8~16자로 입력해주세요."
//                     />
//                     <TextField
//                         fullWidth
//                         size="medium"
//                         type="password"
//                         placeholder="새 비밀번호를 다시 입력해주세요."
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default MyProfile
