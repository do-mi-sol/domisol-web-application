import React, { Component } from "react";
import "../../assets/css/Write.css";
import { Grid, Box } from "@material-ui/core";
import DMSButton from "../../components/customs/DMSButton";
import { FormGroup, Label, Input } from "reactstrap";

export default class Write extends Component {
  state = {
    test:
      "https://cdn.clien.net/web/api/file/F01/3802215/92348cd7fe8441e8956.JPG",
    file: "",
    previewURL: "",
  };
  //글쓰기 버튼 클릭함수
  clickWrite = () => {
    console.log(this.state);
  };

  //title,contents저장함수
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //사진저장후 프리뷰함수
  handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        test: "",
        file: file,
        previewURL: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  handleSudmit = (e) => {
    e.preventDefult();
    this.props.onSaveData(this.state);
    this.setState({});
  };

  render() {
    //이미지크기조절,이미지여러개 받기,이미지프리뷰슬라이드처리,css,사용자 정보 받기,로고
    let talk_preview = null;
    if (this.state.file !== "") {
      talk_preview = (
        <img className="talk_preview" src={this.state.previewURL} alt="" />
      );
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSudmit}>
          <Grid
            container
            spacing={1}
            style={{ marginTop: 30, marginBottom: 20 }}
          >
            <Grid item xs={12} sm={6}>
              <Box p={2}>
                <Label for="talk_img">
                  <img className="talk-img" src={this.state.test} alt="" />
                </Label>
                <Input
                  type="file"
                  id="talk_img"
                  accept="image/jpg,image/png,image/jpeg"
                  name="talk_img"
                  className="talk-input"
                  onChange={this.handleFileOnChange}
                />{" "}
                {talk_preview}
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box p={2}>
                <h6>잘하고싶다..연애</h6>
                <hr className="yellow-line" />
                <FormGroup>
                  <Label className="title-label" for="exampleText">
                    제목:{" "}
                  </Label>
                  <Input
                    type="textarea"
                    name="text"
                    id="exampleText"
                    className="title-input"
                    placeholder="제목을 입력해주세요"
                    label="제목:"
                    inputProps={{ "aria-label": "description" }}
                    onChange={this.handleChange}
                  />
                  <Input
                    type="textarea"
                    name="text"
                    id="exampleText"
                    className="contents-input"
                    //placeholder="내용을 입력해주세요"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className="write-button-box" p={2}>
                {" "}
                <DMSButton
                  className="write-button"
                  variant="contained"
                  onClick={this.clickWrite}
                >
                  글쓰기
                </DMSButton>
              </Box>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}
