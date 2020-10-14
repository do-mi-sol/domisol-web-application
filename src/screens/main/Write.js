import React, {Component} from 'react'
import '../../assets/css/Write.css'
import {Card} from '@material-ui/core'
import DMSButton from '../../components/customs/DMSButton'
//import DMSTextfield from '../../components/customs/DMSTextfield';
import {CustomInput, FormGroup, Label} from 'reactstrap'
import RichTextEditor from '../../components/write/TextEditor'
import DatePicker from '../../components/write/DatePicker'
import DMSInput from '../../components/customs/DMSInput'
import TitleInput from '../../components/write/TitleInput'

export default class Write extends Component {
    state = {
        test: 'https://cdn.clien.net/web/api/file/F01/3802215/92348cd7fe8441e8956.JPG',
        file: '',
        previewURL: '',
    }
    //글쓰기 버튼 클릭함수
    clickWrite = () => {
        console.log(this.state)
    }

    //title,contents저장함수
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    //사진저장후 프리뷰함수
    handleFileOnChange = (event) => {
        event.preventDefault()
        let reader = new FileReader()
        let file = event.target.files[0]
        reader.onloadend = () => {
            this.setState({
                test: '',
                file: file,
                previewURL: reader.result,
            })
        }
        reader.readAsDataURL(file)
    }

    handleSudmit = (e) => {
        e.preventDefult()
        this.props.onSaveData(this.state)
        this.setState({})
    }

    render() {
       //이미지 프리뷰
        let talk_preview = null
        if (this.state.file !== '') {
            talk_preview = <img className="talk_preview" src={this.state.previewURL} alt="" />
        }
        return (
            <div className="write-background">
                <Card className="write-card">
                    <form className="container" onSubmit={this.handleSudmit}>
                        {/*게시판 이름*/}                                               
                        <div className="write-container">
                            {/*이미지 프리뷰*/}        
                            <div className="write-picture-container">
                                <Label for="talk_img">
                                <img className="write-talk-img" src={this.state.test} alt="" />
                                </Label>
                                <CustomInput
                                    type="file"
                                    id="talk_img"
                                    accept="image/jpg,image/png,image/jpeg"
                                    name="talk_img"
                                    className="write-talk-input"
                                    onChange={this.handleFileOnChange}
                                />
                                {talk_preview}
                            </div>
                            {/*오른쪽 인풋창*/}
                            <div className="write-input-container">
                            <small className="write-boardtext">잘하고싶다...연애</small>    
                            
                               {/* <hr className="write-line2" />*/}
                                <FormGroup>
                                    <div className="write-title-input">
                                    {/*제목 input*/}
                                    <TitleInput className="write-title-input"
                                        onChange={this.handleChange}                                 
                                                        type="title"
                                                        label="TITLE"                                                      
                                                        variant="outlined"/>
                            </div>
                                    {/*id input*/}
                                    <div className="write-id-date-container">
                                    <DMSInput
                                      //  value={id}
                                        name="id"
                                        type="id"
                                        label="ID"
                                        onChange={this.handleChange}
                                        variant="outlined"/>
                            

                                
                                    {/*날짜 선택*/}
                                <DatePicker/>
                                </div>
                                <div className="write-contents-input">
                                {/*글 input*/}
                                    <RichTextEditor />
                                </div>
                            </FormGroup>
                        </div>
                        </div>
                    </form>
                    {/*버튼*/}
                    <div className="write-button-container">
                        <div className="write-button">
                            <DMSButton
                                className="write-write-button"
                                variant="contained"
                                onClick={this.clickWrite}
                            >
                                글쓰기{' '}
                            </DMSButton>
                        </div>
                        <div className="write-button">
                            <DMSButton
                                className="write-write-button"
                                variant="contained"
                                onClick={this.clickWrite}
                            >
                                다시 쓰기
                            </DMSButton>
                        </div>
                        <div className="write-button">
                            <DMSButton
                                className="write-write-button"
                                variant="contained"
                                onClick={this.clickWrite}
                            >
                                목록
                            </DMSButton>
                        </div>
                        <br></br>
                    </div>
                </Card>
            </div>
        )
    }
}
