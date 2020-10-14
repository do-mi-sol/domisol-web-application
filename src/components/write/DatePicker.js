import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft:50
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 185,
    marginTop:15
  },
}));

const DatePicker = ({id, label, }) => {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id={id}
        label={label}
        type="date"
        defaultValue="2020-10-14"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
    }
  export default DatePicker