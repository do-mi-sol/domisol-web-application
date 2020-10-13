import React from 'react';
import { Paper, InputBase,IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const styles = makeStyles ((theme) => ({
    root: {
        marginRight:50,
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 300,
      },
      input: {
        marginLeft: theme.spacing(1),
        flex: 1,
      },
      iconButton: {
        padding: 10,
      },
      divider: {
        height: 28,
        margin: 4,
      },
  textfield: {
    height: 20,
  },
}));

const Search = ({value,onChange}) => {
  const classes = styles ();
  return (
    <div>
        <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        name="search"
        placeholder="search"
        inputProps={{ 'aria-label': 'search' }}
        onChange={onChange}
        value={value}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
      <FontAwesomeIcon icon={'search'}/>
      </IconButton>
    </Paper>
    </div>
  );
};

export default Search;
