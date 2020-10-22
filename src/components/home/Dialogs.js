import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Button,Dialog,Typography} from '@material-ui/core'
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Dialogs({email,git,name,major,blog,instagram}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const gitLink = 'https://github.com/'+ git
  const instaLink = 'https://www.instagram.com/'+instagram

  const gitClick = () =>{
      window.open(gitLink)
  }
  const blogClick = () => {
      window.open(blog)
  }
  const instaClick = () => {
      window.open(instaLink)
  }

  return (
    <div>
      <Button onClick={handleClickOpen} style={{width:180,marginTop:8,fontSize:15}}>
        Contact
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" style={{width:500}}>
        <FontAwesomeIcon icon={"heartbeat"} size='1x' color='dimgray'/> {name}
        </DialogTitle>
        <DialogContent dividers>
        <Typography gutterBottom>
            인천대학교 {major} & 멋쟁이 사자처럼 소속
            
          </Typography>
          <Typography gutterBottom>
            EMAIL : {email}
          </Typography>
          <Typography gutterBottom>
              바로가기 :
                {git ? (
                 <Button onClick={gitClick} style={{backgroundColor:'white',color:"black"}}>
                    <FontAwesomeIcon icon={["fab", "github"]} size='2x' color='black'/>
                </Button>
                ) : null}
                {blog?(
                <Button onClick={blogClick} style={{backgroundColor:'white',color:"black"}}>
                    <FontAwesomeIcon icon={"blog"} size='2x' color='black'/>
                </Button>):null}
                {instagram?(
                <Button onClick={instaClick} style={{backgroundColor:'white',color:"black",position:'relative',top:2}}>
                    <FontAwesomeIcon icon={["fab", "instagram"]} size='2x' color='black'/>
                </Button>):null}
          </Typography>
        </DialogContent>
        <DialogActions>
            
          <Button onClick={handleClose} color="primary">
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}