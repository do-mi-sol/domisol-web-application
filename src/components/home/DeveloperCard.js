import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../../assets/css/Home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {Avatar,Button} from '@material-ui/core'

const comment = 
  <FontAwesomeIcon
  icon={["far", "comment-dots"]} size='1x' color='black'
/>
const instagram = 
  <FontAwesomeIcon icon={["fab", "instagram"]} size='1x' color='black'/>

const blog = <FontAwesomeIcon icon={"blog"} size='1x' color='black'/>

const buttoncolor = '#fafafa' // card 배경색이랑 같게 지정

const DeveloperCard = ({src, name,role,major,
  contactLink="https://www.instagram.com/",instagramLink="https://www.instagram.com/",blogLink="https://www.instagram.com/"}) =>{
  
    return(
        <div className="home-card">
              <Avatar src={src} alt={name} style={{height:100,width:100,top:-20,border:'soild gray'}}/>
                  <h2>{name}</h2>
              <p className="title">{role}</p>
            <p style={{margin:0}}>인천대학교 {major}</p>
            <div className='card-button-wrapper'>
              <Button children={comment} onClick={()=>window.open(contactLink)} style={{backgroundColor:buttoncolor}}/>
              <Button children={instagram} onClick={()=>window.open(instagramLink)} style={{backgroundColor:buttoncolor}}/>
              <Button children={blog} onClick={()=>window.open(blogLink)} style={{backgroundColor:buttoncolor}}/>
              {/* <DMSButton children={comment} color='white' href={contactLink}/> */}
            </div>
        </div>
    )
}

export default DeveloperCard;