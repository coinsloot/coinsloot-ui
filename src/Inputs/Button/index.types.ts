import { StyleHTMLAttributes } from "react";
import { ReactChild } from "react";

interface ButtonProps {
  /**
   * Override component classname
   */
  className?: string
  /**
   * Is button primary
   */
  type?: 'primary' | 'white' | 'ghost' | 'link' | 'text'
  /**
   * Link url
   */
  url?: string
  /**
   * Is tbutton disabled
   */
  disabled?: boolean
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
  * Button content
  */
  children?: ReactChild
  /**
   * Button round corners
   */
  round?: boolean
  /**
   * Button width
   */
  width?: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

export default ButtonProps