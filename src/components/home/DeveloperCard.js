import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../../assets/css/Home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {Avatar} from '@material-ui/core'
// import DMSButton from '../customs/DMSButton'

const comment = 
  <FontAwesomeIcon
  icon={["far", "comment-dots"]}
  size='2x'
/>
const instagram = 
  <FontAwesomeIcon icon={["fab", "instagram"]} size='2x'/>

const facebook = <FontAwesomeIcon icon={["fab", "facebook-f"]} size='2x'/>

const DeveloperCard = ({src, name,role,major}) =>{
  
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
              {/* <DMSButton variant='text' children={comment} color='black' />
              <DMSButton children={instagram} color='black'/>
              <DMSButton children={facebook} color='black'/> */}
              {comment}
              {instagram}
              {facebook}
            </div>
            
              
            </div>
    )
}

export default DeveloperCard;