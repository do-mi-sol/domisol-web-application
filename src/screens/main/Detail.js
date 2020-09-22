import React from "react"
import { Form } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

function Detail() {
  return (
    <div class="container center">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
      ></link>

      <div class="col-sm-12">
        <div class="container text-center">
          <div className="row">
            <div className="col-sm-4">
              <section className="boardtext">
                <h4>
                  <small>잘하고싶다...연애</small>
                </h4>
                <hr border-color="yellow" border-style="solid" />
                <h5>
                  <span className="glyphicon glyphicon-time"></span> Post by Jane Dane, Sep 27,
                  2015.
                </h5>
                <h2>썸인가요?????</h2>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <p>
                  Food is my passion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
                <br></br>
                {/* 좋ㅇㅏ용 수 */}
                {/* <a href="#">
                    <span class="glyphicon glyphicon-heart"></span>
                  </a>
                  {"           "}
                  <a href="#">
                    <span class="glyphicon glyphicon-heart"></span>
                  </a> */}
              </section>
            </div>
            <section className="col-sm-6">
              <img
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20110108_7%2Fwooroo88_1294461731368Btxio_JPEG%2F17773_S08_092951.jpg&type=sc960_832"
                alt="Boardpic"
                width="500px"
                height="550px"
              />
            </section>
          </div>
        </div>

        <h4>Leave a comment:</h4>
        <Form role="form">
          <div className="form-group">
            <textarea className="form-control" rows="3" required></textarea>
          </div>
          <button type="submit" class="btn btn-warning btn-lg">
            등록
          </button>
        </Form>
        <br></br>

        <div class="row">
          <img
            class="col-sm-2 text-center"
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F032%2F2011%2F10%2F05%2F3.jpg&type=sc960_832"
            class="img-circle"
            height="65"
            width="65"
            alt="Avatar"
          />
          <div class="col-sm-10">
            <h4>
              Anja <small>Sep 29, 2015, 9:12 PM</small>
            </h4>
            <p>
              Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <button type="button" class="btn btn-danger btn-sm">
              <span class="glyphicon glyphicon-heart"></span> Heart
            </button>
            <br></br>
          </div>
        </div>
        <hr size="20" color="yellow" height="10px" background-color="yellow" />

        <div class="row">
          <img
            class="col-sm-2 text-center"
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F032%2F2011%2F10%2F05%2F3.jpg&type=sc960_832"
            class="img-circle"
            height="65"
            width="65"
            alt="Avatar"
          />
          <div class="col-sm-10">
            <h4>
              Anja <small>Sep 29, 2015, 9:12 PM</small>
            </h4>
            <p>
              Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <button type="button" class="btn btn-danger btn-sm">
              <span class="glyphicon glyphicon-heart"></span> Heart
            </button>
            <br></br>

            <p>
              <span class="badge">1</span> Comment:
            </p>

            <div class="row">
              <div class="col-sm-2 text-center">
                <img
                  src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F032%2F2011%2F10%2F05%2F3.jpg&type=sc960_832"
                  class="img-circle"
                  height="65"
                  width="65"
                  alt="Avatar"
                />
              </div>
              <div class="col-xs-10">
                <h4>
                  Nested Bro <small>Sep 25, 2015, 8:28 PM</small>
                </h4>
                <p>Me too! WOW!</p>
                <button type="button" class="btn btn-danger btn-sm">
                  <span class="glyphicon glyphicon-heart"></span>Heart
                </button>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Detail
