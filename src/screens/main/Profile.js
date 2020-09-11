import React from "react"
import "../css/Profile.css"
import { CardDeck, Card } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

function Profile() {
  return (
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
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
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
              This card has supporting text below as a natural lead-in to additional content.{" "}
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
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This card has even longer content than the first to show that equal height
              action.
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
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
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
              This card has supporting text below as a natural lead-in to additional content.{" "}
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
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This card has even longer content than the first to show that equal height
              action.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  )
}
export default Profile
