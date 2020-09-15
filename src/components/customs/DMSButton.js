import React from 'react'
import {Button} from '@material-ui/core'

const DMSButton = ({
    children,
    variant,
    size,
    href,
    width,
    color,
    margin,
    onClick,
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
                }}
            />
        </div>
    )
}

export default DMSButton
