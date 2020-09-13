import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  container: {
    width: 400,
  },
  textfield: {
    height: 20,
  },
}));

const DMSButton = ({ children, variant, size, href }) => {
  const classes = styles();
  return (
    <div>
      <Button
        children={children}
        variant={variant}
        size={size}
        href={href}
        style={{ width: 400, backgroundColor: "#ffd400", marginTop: 20 }}
      />
    </div>
  );
};

export default DMSButton;
