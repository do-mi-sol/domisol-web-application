import React from 'react'
import {Button} from '@material-ui/core'

const DMSButton = ({
    children,
    variant,
    size,
    href,
    width,
    color = '#ffd400',
    margin,
    onClick,
    radiusBottom,
    radiusTop,
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
                    width: width,
                    backgroundColor: color,
                    marginTop: margin,
                    // border radius 설정 추가
                    borderBottomLeftRadius: radiusBottom,
                    borderBottomRightRadius: radiusBottom,
                    borderTopLeftRadius: radiusTop,
                    borderTopRightRadius: radiusTop,
                }}
            />
        </div>
    )
}

export default DMSButton
