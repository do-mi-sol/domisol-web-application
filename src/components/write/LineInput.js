import React from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles (theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing (1),

      width: '100%',
    },
  },
}));
const LineInput = ({id, label, type, onChange}) => {
  const classes = useStyles ();
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id={id}
          type={type}
          label={label}
          onChange={onChange}
          InputProps={{classes: {input: classes.textfield}}}
        />
      </form>
    </div>
  );
};

export default LineInput;
