import React from "react";
import { Button } from "@material-ui/core";

const DMSButton = ({
    children,
    variant,
    size,
    href,
    width,
    height,
    color = "#c78d8d",
    textColor,
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
                    color:textColor,
                    width: width,
                    height:height,
                    backgroundColor: color,
                    marginTop: margin,
                    // border radius 설정 추가
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
