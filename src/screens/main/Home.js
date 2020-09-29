// import React, { Component } from "react";
// import { Carousel, Button, CardDeck, Card } from "react-bootstrap";
// import AwesomeSlider from "react-awesome-slider";
// import AutoplaySlider from "react-awesome-slider/hoc/Autoplay";
// import Header from "../../components/header/Header";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/Home.css";

// import "react-awesome-slider/dist/styles.css";

// export default class Home extends Component {
//   render() {
//     return (
//       <div>
//         <AutoplaySlider play={true} cancelOnInteraction={false} interval={3000}>
//           <div data-src={require("../../assets/images/pic1.jpg")}>
//             <caption>안녕</caption>
//           </div>
//           <div data-src={require("../../assets/images/pic2.jpg")}></div>
//           <div data-src={require("../../assets/images/pic3.jpg")}></div>
//         </AutoplaySlider>
//         {/* <AwesomeSlider infinite={true} transitionDelay={2000}>
//           <div data-src={require("../../assets/images/pic1.jpg")}>
//             <caption>안녕</caption>
//           </div>
//           <div data-src={require("../../assets/images/pic2.jpg")}></div>
//           <div data-src={require("../../assets/images/pic3.jpg")}></div>
//         </AwesomeSlider> */}
//         {/* <Carousel>
//           <Carousel.Item>
//             <img
//               className="dog"
//               src={require("../../assets/images/pic1.jpg")}
//               alt="First slide"
//             />
//             <Carousel.Caption>
//               <h3>First slide label</h3>
//               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             </Carousel.Caption>
//           </Carousel.Item> */}

//         {/* <Carousel.Item interval={500}>
//             <img
//               className="dog"
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F032%2F2011%2F10%2F05%2F3.jpg&type=sc960_832"
//               alt="second slide"
//             />

//             <div className="woo">
//               <h3>Second slide label</h3>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </div>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="dog"
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20101031_282%2Fbengal_1_1288470113525LEgkd_JPEG%2F%25B0%25AD%25BE%25C6%25C1%25F61.jpg&type=sc960_832"
//               alt="Third slide"
//             />
//             <div className="woo">
//               <h3>Third slide label</h3>
//               <p>
//                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//               </p>
//             </div>
//           </Carousel.Item> */}
//         {/* </Carousel> */}
//         <br></br>
//         <br></br>
import React, { Component } from "react"
import { Carousel, Button, CardDeck, Card } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../assets/css/Home.css"

export default class Home extends Component {
  render() {
    return (
      <div>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://i.huffpost.com/gen/1446258/images/o-ABOUT-TIME-facebook.jpg"
              alt="First slide"
              width="1200"
              height="800"
            />

            <Carousel.Caption>
              <h1 class="font-weight-bold">First slide label</h1>
              <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
              <br></br>
              <button type="button" class="btn btn-default btn-lg">
                둘러보기
              </button>
              {"                        "}

              <button type="button" class="btn btn-warning btn-lg">
                로그인하기->
              </button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20131121_247%2Fschoolss_1385015690400MYVmV_JPEG%2Fabouttime_15.jpg&type=sc960_832"
              alt="Third slide"
              width="1200"
              height="800"
            />

            <Carousel.Caption>
              <h1 class="font-weight-bold">Second slide label</h1>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F032%2F2011%2F10%2F05%2F3.jpg&type=sc960_832"
              alt="Third slide"
              width="1200"
              height="800"
            />

            <Carousel.Caption>
              <h1 class="font-weight-bold">Third slide label</h1>
              <h3>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* </div> */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <img
            className="pic-right"
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTEyMDlfMTg3%2FMDAxNTc1ODk0NjMxNjIx.lZh5YxHUvp3gY6RzsTMM-UyUbpMBK6xzb7as_Nv_iYwg.5yFzYIosQAhp2S_Uz36IMj60p_paZwQHdsC2ZHH0t8Ag.JPEG.tobemaven%2F%25BA%25F1%25C6%25F7%25BC%25B1%25B6%25F3%25C0%25CC%25C1%25EE.JPG&type=sc960_832"
            alt="loveyou"
          />
          <br></br>
          <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br>
          <div class="text-align center" align="middle">
            <h1 class="font-weight-bold">About Domisol..</h1>
            <br></br>
            <br></br>

            <p1>
              도움에 미친 솔로들,<br></br>
              그리고 연인들을 위해 탄생했습니다.
            </p1>
          </div>
          <img
            className="pic-left"
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20110108_7%2Fwooroo88_1294461731368Btxio_JPEG%2F17773_S08_092951.jpg&type=sc960_832"
            alt="lovewe"
          />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <br></br>
        <div className="ourvalues">
          <div class="container-fluid bg-grey">
            <div class="row">
              <div class="col-sm-4">
                <span class="glyphicon glyphicon-heart logo"></span>
              </div>
              <div class="col-sm-8">
                <h2 class="font-weight-bold">Our Values</h2>
                <br></br>
                <br></br>
                <h4>
                  <strong>MISSION:</strong> Our mission lorem ipsum..
                </h4>
                <br></br>
                <p>
                  <strong>VISION:</strong> Food is my passion. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* our service */}
        <div className="service">
          <h2 text-align="center">our service...</h2>
          <h3>blablablablabla</h3>
          <div class="container">
            <img
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20110228_96%2Fflythddl_1298880440729H4MVb_JPEG%2FFlipped.avi_005048001.jpg&type=sc960_832"
              alt="Avatar"
              class="services"
            />
            <div class="overlay">
              <div class="text">연애상담 ~~~~~~~</div>
            </div>
          </div>
          <div class="container center">
            <img
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20110806_143%2Frosso0603_1312640316590eljtb_JPEG%2FFlipped.2010.720p.BRRip.XviD.AC3-ELiTE.avi_005067683.jpg&type=sc960_832"
              alt="Avatar"
              class="services"
            />
            <div class="overlay">
              <div class="text">게시판기능~~~알ㄴ알ㄴ얼</div>
            </div>
          </div>
          <div class="container center">
            <img
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2FMjAxNzA3MjBfMTAw%2FMDAxNTAwNTMwMDQ4ODAz.gg0fwvbWaaYjtcMW1RakZi7HlJccn3WJnU_TIxB6FDQg.MdncQYMgUZZAVylhDZhVSgUzxR9g1l4tNpfNvJ5nFHkg.JPEG%2FI-_qMd-cSNV0b1OhXy41Y9jmyRaQ.jpg&type=sc960_832"
              alt="Avatar"
              class="services"
            />
            <div class="overlay">
              <div class="text">Hello World</div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div class="profile">
          <div class="container center">
            <h1 text-align=" center" class="font-weight-bold">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              do-mi-sol developer
            </h1>
            <br></br>
            <div class="card">
              <img
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5353%2F2019%2F05%2F27%2F0000538860_001_20190527125648704.jpg&type=sc960_832"
                alt="John"
                width="100%"
              />
              <h1>John Doe</h1>
              <p class="title">CEO & Founder, Example</p>
              <p>Harvard University</p>
              <div margin="24px 0">
                <a href="#">
                  <i class="fa fa-commenting-o"></i>
                </a>
                <a href="#">
                  <i class="fa fa-envelope"></i>
                </a>

                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
              </div>
              <p>
                <button>Contact</button>
              </p>
            </div>
            <div class="card">
              <img
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5353%2F2019%2F05%2F27%2F0000538860_001_20190527125648704.jpg&type=sc960_832"
                alt="John"
                width="100%"
              />
              <h1>John Doe</h1>
              <p class="title">CEO & Founder, Example</p>
              <p>Harvard University</p>
              <div margin="24px 0">
                <a href="#">
                  <i class="fa fa-commenting-o"></i>
                </a>
                <a href="#">
                  <i class="fa fa-envelope"></i>
                </a>

                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
              </div>
              <p>
                <button>Contact</button>
              </p>
            </div>
            <div class="card">
              <img
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5353%2F2019%2F05%2F27%2F0000538860_001_20190527125648704.jpg&type=sc960_832"
                alt="John"
                width="100%"
              />
              <h1>John Doe</h1>
              <p class="title">CEO & Founder, Example</p>
              <p>Harvard University</p>
              <div margin="24px 0">
                <a href="#">
                  <i class="fa fa-commenting-o"></i>
                </a>
                <a href="#">
                  <i class="fa fa-envelope"></i>
                </a>

                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
              </div>
              <p>
                <button>Contact</button>
              </p>
            </div>
            <br></br>
            <div class="card">
              <img
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5353%2F2019%2F05%2F27%2F0000538860_001_20190527125648704.jpg&type=sc960_832"
                alt="John"
                width="100%"
              />
              <h1>John Doe</h1>
              <p class="title">CEO & Founder, Example</p>
              <p>Harvard University</p>
              <div margin="24px 0">
                <a href="#">
                  <i class="fa fa-commenting-o"></i>
                </a>
                <a href="#">
                  <i class="fa fa-envelope"></i>
                </a>

                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
              </div>
              <p>
                <button>Contact</button>
              </p>
            </div>
            <div class="card">
              <img
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5353%2F2019%2F05%2F27%2F0000538860_001_20190527125648704.jpg&type=sc960_832"
                alt="John"
                width="100%"
              />
              <h1>John Doe</h1>
              <p class="title">CEO & Founder, Example</p>
              <p>Harvard University</p>
              <div margin="24px 0">
                <a href="#">
                  <i class="fa fa-commenting-o"></i>
                </a>
                <a href="#">
                  <i class="fa fa-envelope"></i>
                </a>

                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
              </div>
              <p>
                <button>Contact</button>
              </p>
            </div>
            <div class="card">
              <img
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5353%2F2019%2F05%2F27%2F0000538860_001_20190527125648704.jpg&type=sc960_832"
                alt="John"
                width="100%"
              />
              <h1>John Doe</h1>
              <p class="title">CEO & Founder, Example</p>
              <p>Harvard University</p>
              <div margin="24px 0">
                <a href="#">
                  <i class="fa fa-commenting-o"></i>
                </a>
                <a href="#">
                  <i class="fa fa-envelope"></i>
                </a>

                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
              </div>
              <p>
                <button>Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
