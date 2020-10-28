import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const Styles = makeStyles((theme) => ({
    root: {
        borderColor: "orange",
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "70ch",
            borderColor: "yellow",
        },
        "&.Mui-focused fieldset": {
            borderColor: "yellow",
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "gray",
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "gray",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ffd400",
        },
    },
}));

const DMSTextfield = ({ label, rows, defaultValue, width, color = "#ffd400" }) => {
    const classes = Styles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    id="outlined-multiline-static"
                    label={label}
                    multiline
                    rows={rows}
                    defaultValue={defaultValue}
                    color="#ffd400"
                    variant="outlined"
                    style={{ width: "100%" }}
                    InputProps={{ classes: { input: classes.textfield } }}
                />
            </div>
        </form>
    );
};

export default DMSTextfield;
