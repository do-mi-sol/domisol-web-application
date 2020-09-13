import React from "react";
import { Button } from "@material-ui/core";

const DMSButton = ({ children, variant, size, href, width, color, margin }) => {
  return (
    <div>
      <Button
        children={children}
        variant={variant}
        size={size}
        href={href}
        style={{
          width: width,
          backgroundColor: color,
          marginTop: margin,
        }}
      />
    </div>
  );
};

export default DMSButton;
