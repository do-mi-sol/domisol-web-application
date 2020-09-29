import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconButton} from '@material-ui/core';

const useStyles1 = makeStyles (theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing (2.5),
  },
}));

function TablePaginationActions (props) {
  const classes = useStyles1 ();
  const theme = useTheme ();
  const {count, page, rowsPerPage, onChangePage} = props;

  const handleBackButtonClick = event => {
    onChangePage (event, page - 1);
  };

  const handleNextButtonClick = event => {
    onChangePage (event, page + 1);
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl'
          ? <FontAwesomeIcon icon={'arrow-right'} />
          : <FontAwesomeIcon icon={'arrow-left'} />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil (count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl'
          ? <FontAwesomeIcon icon={'arrow-left'} />
          : <FontAwesomeIcon icon={'arrow-right'} />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default TablePaginationActions;
