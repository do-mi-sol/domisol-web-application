import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../../assets/css/Home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {Avatar} from '@material-ui/core'
import DMSButton from '../customs/DMSButton'

const comment = 
  <FontAwesomeIcon
  icon={["far", "comment-dots"]} size='2x'
/>
const instagram = 
  <FontAwesomeIcon icon={["fab", "instagram"]} size='2x'/>

const blog = <FontAwesomeIcon icon={"blog"} size='2x'/>

const DeveloperCard = ({src, name,role,major,
  contactLink="https://www.instagram.com/",instagramLink="https://www.instagram.com/",blogLink="https://www.instagram.com/"}) =>{
  
    return(
        <div className="home-card">
              <Avatar src={src} alt={name} style={{height:100,width:100,top:-20,border:'soild gray'}}/>
              {/* <img
                src={src}
                alt={name}
                width="100%"
              /> */}
                  <h2>{name}</h2>
              <p className="title">{role}</p>
            <p>인천대학교 {major}</p>
            <div className='card-button-wrapper'>
              <DMSButton children={comment} color='white' href={contactLink}/>
              <DMSButton children={instagram} color='white' href={instagramLink}/>
              <DMSButton children={blog} color='white' href={blogLink}/>
              
            </div>
            {/* {comment}
              {instagram}
              {facebook} */}
              
            </div>
    )
}

export default DeveloperCard;