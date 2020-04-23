import React, {AnchorHTMLAttributes, ButtonHTMLAttributes, FC, ReactNode} from 'react'
import classNames from 'classnames'

export enum ButtonSize {
  Large= 'large',
  Small = 'small'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

interface BaseButtonProps {
  className ?: string,
  disabled ?: boolean,
  size ?: ButtonSize,
  btnType ?: ButtonType,
  children ?: ReactNode
  href ?: string
}

type NativeButtonProps = ButtonHTMLAttributes<HTMLElement> & BaseButtonProps
type AnchorButtonProps = AnchorHTMLAttributes<HTMLElement> & BaseButtonProps
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button:FC<ButtonProps> = props => {
  const {className,children, disabled,size,btnType, href, ...restProps}  = props
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType===ButtonType.Link) && disabled
  })
  if(btnType===ButtonType.Link && href) {
    return <a className={classes} href={href} {...restProps}>{children}</a>
  } else {
    return <button className={classes} disabled={disabled} {...restProps}>{children}</button>
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button