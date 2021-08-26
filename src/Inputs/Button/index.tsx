import React from "react";

import ButtonProps from "./index.types";

const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  size = 'medium',
  children,
  url,
  disabled = false,
  round = true,
  style,
  onClick = () => null,
  className = ''
}) => {
  const buttonClassname = 'cl-button'
  const buttonType = `${buttonClassname}-${type}${disabled ? "-disabled" : ""}`
  const buttonSize = `${buttonClassname}-${size}`
  const buttonShape = round ? `${buttonClassname}-round` : ''
  const classes = `${buttonClassname} ${className? className + " " : ""}${[buttonSize, buttonType, buttonShape].join(' ')}`

  return type !== "link" ? <button
    type='button'
    className={classes}
    style={style}
    onClick={() => {
      !disabled ? onClick() : null
    }}
  >
    {children}
  </button> : <a href={url} className={classes} style={style}>{children}</a>
}

export default Button;
