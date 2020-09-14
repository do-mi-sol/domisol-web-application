import React from 'react'

import {Carousel, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Slide.css'

function Slide() {
    return (
        <div>
            <Carousel>
                {/* <div className="slider"> */}
                <Carousel.Item interval={1000}>
                    <img
                        className="dog"
                        src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20100615_12%2Fkkchblue_12765686609822pxfs_jpg%2F%25B0%25AD%25BE%25C6%25C1%25F6_kkchblue.jpg&type=sc960_832"
                        alt="First slide"
                    />
                    {/* <div clear="both"></div> */}
                    <div class="woo">
                        <h3>First slide label</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue
                            mollis interdum.
                        </p>
                    </div>
                </Carousel.Item>
                {/* </div> */}
                <Carousel.Item interval={500}>
                    <img
                        className="dog"
                        src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F032%2F2011%2F10%2F05%2F3.jpg&type=sc960_832"
                        alt="second slide"
                    />

                    <div className="woo">
                        <h3>Second slide label</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                        </p>
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
                            Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur.
                        </p>
                    </div>
                </Carousel.Item>
            </Carousel>
            <br></br>
            <br></br>

            <Button variant="outline-warning">둘러보기</Button>
            {''}

            <Button variant="warning">로그인하기</Button>
        </div>
    )
}
export default Slide
