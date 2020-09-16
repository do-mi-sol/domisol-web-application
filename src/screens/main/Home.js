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
import React, { Component } from "react";
import { Carousel, Button, CardDeck, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <br></br>
        <br></br>
        <br></br>
        <Carousel
          indicators={false}
          carousel-control-next-icon
          carousel-control-prev-icon
        >
          <Carousel.Item interval={1000}>
            <img
              className="dog"
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20100615_12%2Fkkchblue_12765686609822pxfs_jpg%2F%25B0%25AD%25BE%25C6%25C1%25F6_kkchblue.jpg&type=sc960_832"
              alt="First slide"
            />

            <div class="woo">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </Carousel.Item>

          <Carousel.Item interval={500}>
            <img
              className="dog"
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F032%2F2011%2F10%2F05%2F3.jpg&type=sc960_832"
              alt="second slide"
            />

            <div className="woo">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="dog"
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20101031_282%2Fbengal_1_1288470113525LEgkd_JPEG%2F%25B0%25AD%25BE%25C6%25C1%25F61.jpg&type=sc960_832"
              alt="Third slide"
            />
            <div className="woo">
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
        <br></br>
        <br></br>

        <Button variant="outline-warning">둘러보기</Button>
        {"           "}

        <Button variant="warning">로그인하기</Button>

        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <img
            className="pic-right"
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTEyMDlfMTg3%2FMDAxNTc1ODk0NjMxNjIx.lZh5YxHUvp3gY6RzsTMM-UyUbpMBK6xzb7as_Nv_iYwg.5yFzYIosQAhp2S_Uz36IMj60p_paZwQHdsC2ZHH0t8Ag.JPEG.tobemaven%2F%25BA%25F1%25C6%25F7%25BC%25B1%25B6%25F3%25C0%25CC%25C1%25EE.JPG&type=sc960_832"
            alt="loveyou"
          />

          <div className="text-right">
            <h3>도미솔은</h3>
            <br></br>
            <br></br>
            <p>
              도움에 미친 솔로들,<br></br>
              그리고 연인들을 위해 탄생했습니다.
            </p>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div>
          <img
            className="pic-left"
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20110108_7%2Fwooroo88_1294461731368Btxio_JPEG%2F17773_S08_092951.jpg&type=sc960_832"
            alt="lovewe"
          />
          <div className="text-left">
            <h3>도미솔은</h3>
            <br></br>
            <br></br>

            <p>
              도움에 미친 솔로들,<br></br>
              그리고 연인들을 위해 탄생했습니다.
            </p>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <img
            className="pic-right"
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2F20160120_280%2Fnonblame_1453293480858IiPYe_JPEG%2Fmug_obj_145329347968897866.jpg&type=sc960_832"
            alt="lovewe"
          />

          <div className="text-right">
            <h3>도미솔은</h3>
            <br></br>
            <br></br>

            <p>
              도움에 미친 솔로들,<br></br>
              그리고 연인들을 위해 탄생했습니다.
            </p>
          </div>
        </div>
        <div className="carddeck">
          <br></br>
          <br></br>
          <br></br>
          <div className="front">직원소개</div>
          <br></br>
          <br></br>

          <CardDeck>
            <Card>
              <Card.Img
                variant="top"
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20150227_210%2Fjesica0703_1425044160483I0SFl_PNG%2F%25C7%25DC%25C5%25E4%25B8%25AE.png&type=sc960_832"
              />
              <Card.Body>
                <Card.Title>Name</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20120216_246%2Fqlzlqlzl100_1329369393480ham7H_PNG%2F%25B4%25E7%25B1%25D9%25C7%25AA%25B4%25EB-%25C7%25DC%25C5%25E4%25B8%25AE_%252811%2529.png&type=sc960_832"
              />
              <Card.Body>
                <Card.Title>Name</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20120216_189%2Fqlzlqlzl100_1329368377628cgPz2_PNG%2F%25B4%25E7%25B1%25D9%25C7%25AA%25B4%25EB-%25C7%25DC%25C5%25E4%25B8%25AE_%252813%2529.png&type=sc960_832"
              />
              <Card.Body>
                <Card.Title>Name</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
          <br></br>
          <CardDeck>
            <Card>
              <Card.Img
                variant="top"
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20150227_210%2Fjesica0703_1425044160483I0SFl_PNG%2F%25C7%25DC%25C5%25E4%25B8%25AE.png&type=sc960_832"
              />
              <Card.Body>
                <Card.Title>Name</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20120216_246%2Fqlzlqlzl100_1329369393480ham7H_PNG%2F%25B4%25E7%25B1%25D9%25C7%25AA%25B4%25EB-%25C7%25DC%25C5%25E4%25B8%25AE_%252811%2529.png&type=sc960_832"
              />
              <Card.Body>
                <Card.Title>Name</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20120216_189%2Fqlzlqlzl100_1329368377628cgPz2_PNG%2F%25B4%25E7%25B1%25D9%25C7%25AA%25B4%25EB-%25C7%25DC%25C5%25E4%25B8%25AE_%252813%2529.png&type=sc960_832"
              />
              <Card.Body>
                <Card.Title>Name</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      </div>
    );
  }
}
