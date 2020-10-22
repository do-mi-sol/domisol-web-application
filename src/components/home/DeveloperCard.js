import React from 'react'
import "../../assets/css/Home.css"
import {Avatar} from '@material-ui/core'

import Dialogs from './Dialogs'

const DeveloperCard = ({image,name,role,major,blog,git,email,instagram}) =>{
  const imageSrc = require('../../assets/images/'+name+'.jpg')
    return(
        <div className="home-card">
              <Avatar src={imageSrc} alt={name} style={{height:75,width:75,top:-20,border:'soild gray'}}/>
                  <h3>{name}</h3>
              <p className="title" style={{margin:0}}>{role}</p>
          <Dialogs email={email} name={name} major={major} blog={blog} instagram={instagram} git={git}/>
        </div>
    )
}

export default DeveloperCard;