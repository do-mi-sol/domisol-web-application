import React from "react";
import { TextField, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
    textfield: {
        height: 20,
    },
}));

const DMSInput = ({
    id,
    label,
    helper,
    variant,
    type,
    onChange,
    name,
    width = 400,
    placeholder,
}) => {
    const classes = styles();
    return (
        <div>
            <FormControl fullWidth style={{ width: width }}>
                <TextField
                    id={id}
                    type={type}
                    label={label}
                    helperText={helper}
                    margin="dense"
                    variant={variant}
                    onChange={onChange}
                    name={name}
                    placeholder={placeholder}
                    InputProps={{ classes: { input: classes.textfield } }}
                />
            </FormControl>
        </div>
    );
};

export default DMSInput;
