import React, { Component } from "react"
import { Carousel } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../assets/css/Home.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {Grid,Container,Divider} from '@material-ui/core'
import DeveloperCard from '../../components/home/DeveloperCard'
import ButtonBase from '../../components/home/ButtonBase'
import DMSButton from "../../components/customs/DMSButton"

const coupleimage = [require("../../assets/images/couplefeet.jpg"),require("../../assets/images/couplehands.jpg")]

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
            <div className='home-carouselItemContainer' style={{backgroundColor:'white'}}>
              <div className='home-carouselItemWrapper'>
                <Grid container>
                  <Grid item xs={12} sm={8}>
                    <div className='home-carouselImage'
                    style={{background:'url(http://scienceoflove.co.kr/wp-content/uploads/2016/09/sol136_illu_01.png)'}}></div>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <div className='home-carouselText' >
                  <h2 className="w3 font-weight-bold">좋아하는 사람에게 오는 톡?</h2>
                  <h4 style={{paddingLeft:50}}>vs</h4>
                  <h2 className="w3 font-weight-bold" style={{paddingBottom:10}}>아닌 사람에게 오는 톡?</h2>
                  <DMSButton>답장 조언해주러 가기</DMSButton>
                </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className='home-carouselItem'>
            {/* 슬라이드 item 2 */}
            <div className='home-carouselItemContainer' style={{backgroundColor:'#fbf7f2'}}>
              <div className='home-carouselItemWrapper'>
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <div className='home-carouselImage' style={{width:"400px"}}></div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div className='home-carouselText' >
                  <h1 className="w3 font-weight-bold" style={{paddingBottom:10}}>성공적인 연애를 원한다면?</h1>
                  <DMSButton>글 작성하러가기</DMSButton>
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
        <Divider variant="middle" style={{backgroundColor:'black', height:3,width:100,marginTop:5,marginBottom:50}}/>
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
          <Grid container spacing={3}>
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
        </div>
        
        <ButtonBase/>

        <div className="home-aboutthecompany ">
          <Container maxWidth="md">
            <div style={{display:'flex',flexDirection:'column',alignItems:"center",justifyContent:'space-between'}}>
              <h2 className="w3-center font-weight-bold">ABOUT THE COMPANY</h2>
              <Divider variant="middle" style={{backgroundColor:'black', height:2,width:100,marginTop:10,marginBottom:50}}/>
            </div>
            
            {/* <br></br>
            <p className="w3-center w3-large">Key features of our company</p>
            <br></br>
            <br></br>
            <div className="w3-row-padding w3-center" margin-top="64px">
              <div className="w3-quarter">
                <i className="fa fa-desktop w3-margin-bottom w3-jumbo w3-center"></i>
                <p className="w3-large">Responsive</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore.
                </p>
              </div>
              <div className="w3-quarter">
                <i className="fa fa-heart w3-margin-bottom w3-jumbo"></i>
                <p className="w3-large">Passion</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore.
                </p>
              </div>
              <div className="w3-quarter">
                <i className="fa fa-diamond w3-margin-bottom w3-jumbo"></i>
                <p className="w3-large">Design</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore.
                </p>
              </div>
              <div className="w3-quarter">
                <i className="fa fa-cog w3-margin-bottom w3-jumbo"></i>
                <p className="w3-large">Support</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore.
                </p>
              </div>
            </div> */}
          
          {/* Developer Card */}
          <div className="home-profile">
          <h3 className="font-weight-bold">
            <br></br>
            do-mi-sol developer
          </h3>
          <div className="home-card-container">
            <DeveloperCard 
              src="https://i.pinimg.com/736x/0b/2f/8a/0b2f8a51314ab1ebe0505aee843a33b1.jpg" 
              name="김희연" role='frontend' major='수학과'/>
            <DeveloperCard 
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5353%2F2019%2F05%2F27%2F0000538860_001_20190527125648704.jpg&type=sc960_832" 
              name="설한정" role='frontend' major='수학과'/>
              <DeveloperCard 
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5353%2F2019%2F05%2F27%2F0000538860_001_20190527125648704.jpg&type=sc960_832" 
              name="강민정" role='frontend' major='수학과'/>
              </div><div className="home-card-container">

              
              <DeveloperCard 
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5353%2F2019%2F05%2F27%2F0000538860_001_20190527125648704.jpg&type=sc960_832" 
              name="고은희" role='frontend' major='수학과'/>
              <DeveloperCard 
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5353%2F2019%2F05%2F27%2F0000538860_001_20190527125648704.jpg&type=sc960_832" 
              name="이혜림" role='frontend' major='수학과'/>
              <DeveloperCard 
              src="data:image/jpeg;base64,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" 
              name="최지혜" role='frontend' major='수학과'/>
          </div>
        </div>
          </Container>
        </div>
        
        </Container>
</div>
    )
  }
}
