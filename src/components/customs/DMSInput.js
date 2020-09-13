import React from "react";
import { TextField, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  margin: {
    width: 300,
  },
}));

const DMSInput = ({ id, label, helper, variant }) => {
  const classes = styles();
  return (
    <div>
      <FormControl fullWidth className={classes.margin}>
        <TextField
          id={id}
          label={label}
          helperText={helper}
          margin="dense"
          variant={variant}
        />
      </FormControl>
    </div>
  );
};

export default DMSInput;
