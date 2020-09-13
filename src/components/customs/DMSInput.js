import React from "react";
import { TextField, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  container: {
    width: 400,
  },
  textfield: {
    height: 20,
  },
}));

const DMSInput = ({ id, label, helper, variant }) => {
  const classes = styles();
  return (
    <div>
      <FormControl fullWidth className={classes.container}>
        <TextField
          id={id}
          label={label}
          helperText={helper}
          margin="dense"
          variant={variant}
          InputProps={{ classes: { input: classes.textfield } }}
        />
      </FormControl>
    </div>
  );
};

export default DMSInput;
