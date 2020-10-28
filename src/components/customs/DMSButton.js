import React from "react";
import { Button } from "@material-ui/core";

const DMSButton = ({
    children,
    variant,
    size,
    href,
    width,
    height,
    color = "#c19393",
    textColor = "white",
    margin,
    onClick,
    radiusBottom,
    radiusTop,
    marginR,
    marginL,
}) => {
    return (
        <div>
            <Button
                children={children}
                variant={variant}
                size={size}
                href={href}
                onClick={onClick}
                style={{
                    color: textColor,
                    width: width,
                    height: height,
                    backgroundColor: color,
                    marginTop: margin,
                    borderBottomLeftRadius: radiusBottom,
                    borderBottomRightRadius: radiusBottom,
                    borderTopLeftRadius: radiusTop,
                    borderTopRightRadius: radiusTop,
                    marginRight: marginR,
                    marginLeft: marginL,
                }}
            />
        </div>
    );
};

export default DMSButton;
