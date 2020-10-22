import React, { Component } from "react"
import { Carousel } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../assets/css/Home.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {Grid,Container,Divider} from '@material-ui/core'
import DeveloperCard from '../../components/home/DeveloperCard'
import ButtonBase from '../../components/home/ButtonBase'
import DMSButton from "../../components/customs/DMSButton"

const coupleimage = [require("../../assets/images/couplefeet.jpg"),require("../../assets/images/couplehands.jpg"),require('../../assets/images/wedding.jpg')]

export default class Home extends Component {

  render() {
    return (
      <div className="home-container">
        <Container maxWidth='xl' style={{padding:0, zIndex:1}}>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <div className='home-slideContainer'>
      <Carousel style={{zIndex:0}}>
          <Carousel.Item className='home-carouselItem'>
            {/* 슬라이드 item 1 */}
            <div className='home-carouselItemContainer' style={{backgroundColor:'#e7e6e2'}}>
              <div className='home-carouselItemWrapper'>
                <Grid container style={{maxHeight:1000}}>
                  <Grid item xs={12} sm={5}>
                    <img src={require('../../assets/images/message_help.gif')} alt='message' style={{transform: 'scale(0.6)'}}/>
                  </Grid>
                  <Grid item xs={12} sm={7}>
                    <div className='home-carouselText' >
                    <h4 style={{paddingTop:300}}>지금 보고있는</h4>
                    <h1 className="w3 font-weight-bold" style={{paddingBottom:10}}>이 카톡이 답답하다면?</h1>
                    <DMSButton children="답장 조언 해주러가기" margin='7px' href='/write'/>
                  </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className='home-carouselItem'>
            {/* 슬라이드 item 2 */}
            <div className='home-carouselItemContainer' style={{backgroundColor:'#F6F6F0'}}>
              <div className='home-carouselItemWrapper'>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={3}>
                  <img src={require('../../assets/images/message_like.gif')} alt='message' style={{transform: 'scale(0.9)'}}/>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                  <img src={require('../../assets/images/message_unlike.gif')} alt='message' style={{transform: 'scale(0.9)'}}/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div className='home-carouselText' >
                  <h6 style={{paddingTop:80}}>좋아하는 사람에게 오는 톡 vs 아닌 사람에게 오는 톡</h6>
                  <h2 className="w3 font-weight-bold" style={{paddingBottom:10}}>내가 연락하는 사람이 어느 쪽인지 궁금하다면?</h2>
                  <DMSButton>고민 글 작성하러가기</DMSButton>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        </div>


        <div className='home-aboutPageContainer'>
        <h2 className="w3-center font-weight-bold">ABOUT THE DOMISOL</h2>
        <Divider variant="middle" style={{backgroundColor:'black', height:2,width:100,marginTop:10,marginBottom:100}}/>
          {/* aboutPage item 1 */}
          <Grid container spacing={3}  justify="flex-end" alignItems="center" alignContent="flex-end">
          <Grid item xs={12} sm={6}>
            <div className='home-aboutText1'>
              <h2 className="font-weight-bold">도미솔은</h2>
              <br/>
          <p>
              도움에 미친 솔로들,<br/>
              그리고 연인들을 위해 탄생했습니다.
            </p>
            </div>
          
        </Grid>
        <Grid item xs={12} sm={6}>
            <img
            className="home-aboutDoMiSolImage"
            // src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTEyMDlfMTg3%2FMDAxNTc1ODk0NjMxNjIx.lZh5YxHUvp3gY6RzsTMM-UyUbpMBK6xzb7as_Nv_iYwg.5yFzYIosQAhp2S_Uz36IMj60p_paZwQHdsC2ZHH0t8Ag.JPEG.tobemaven%2F%25BA%25F1%25C6%25F7%25BC%25B1%25B6%25F3%25C0%25CC%25C1%25EE.JPG&type=sc960_832"
            src={coupleimage[0]}
            alt="loveyou"
            width="100%"
          /> 
        </Grid>
          </Grid>
          {/* aboutPage item 2 */}
          <Grid container spacing={3} style={{marginTop:80,marginBottom:80}}>
            <Grid item xs={12} sm={6}>
            <img
            className="home-aboutDoMiSolImage"
            // src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20110108_7%2Fwooroo88_1294461731368Btxio_JPEG%2F17773_S08_092951.jpg&type=sc960_832"
            src={coupleimage[1]}
            alt="lovewe"
            width="100%"
            // height="100%"
          />
        </Grid>
          <Grid item xs={12} sm={6}>
          <div className='home-aboutText2'>
              <h2 className="font-weight-bold">도미솔과 함께라면</h2>
              <br/>
          <p>
            도미솔 연애 고수들의 도움으로
            <br/>
              당신도 성공할 수 있습니다.
            </p>
            </div>
        </Grid>
          </Grid>
          {/* aboutPage item 3 */}
          <Grid container spacing={3}  justify="flex-end" alignItems="center" alignContent="flex-end">
          <Grid item xs={12} sm={6}>
            <div className='home-aboutText1'>
              <h2 className="font-weight-bold">도미솔은</h2>
              <br/>
          <p>
              도움에 미친 솔로들,<br/>
              그리고 연인들을 위해 탄생했습니다.
            </p>
            </div>
          
        </Grid>
        <Grid item xs={12} sm={6}>
            <img
            className="home-aboutDoMiSolImage"
            src={coupleimage[2]}
            alt="wedding"
            width="100%"
          /> 
        </Grid>
          </Grid>
        </div>
        
        <ButtonBase/>

        <div className="home-aboutthecompany">
          <Container maxWidth="md">
            <div style={{display:'flex',flexDirection:'column',alignItems:"center",justifyContent:'space-between'}}>
              <h2 className="w3-center font-weight-bold">ABOUT THE COMPANY</h2>
              <Divider variant="middle" style={{backgroundColor:'black', height:2,width:100,marginTop:10,marginBottom:50}}/>
            </div>
          
          {/* Developer Card */}
          <div className="home-profile">
          <h3 className="font-weight-bold" style={{marginBottom:30}}>
            do-mi-sol developer
          </h3>
          <div className="home-card-container">
            <DeveloperCard name="김희연" role='frontend' major='컴퓨터공학부' email='heeeee0818@gmail.com' git='HeeYeonKim98'/>
            <DeveloperCard name="설한정" role='frontend' major='컴퓨터공학부' email="hanjeong94@naver.com" git='HanJeongSeol' instagram='hanjeonnnng/' blog='https://seol-limit.tistory.com/'/>
            <DeveloperCard name="강민정" role='frontend' major='수학과' email='minj2058@gmail.com' git='Minjeong-K' instagram='m._.jeongs2/' blog='https://blog.naver.com/rkd5183'/>
          </div>
            <div className="home-card-container">  
              <DeveloperCard name="고은희" role='frontend' major='정보통신공학과' email='eheheh327@naver.com ' git='eunhee-ko'/>
              {/* <DeveloperCard name="이혜림" role='frontend' major='수학과' git='hye-rim-lee'/> */}
              <DeveloperCard name="최지혜" role='frontend' major='도시행정학과' email='jangnyer@naver.com' git='jangnyer'/>
          </div>
        </div>
          </Container>
        </div>
        
        </Container>
</div>
    )
  }
}
