import { FC } from 'react'
import classNames from "classnames/bind"

import styles from './ButtonE2.module.css'

const cx = classNames.bind(styles)

const ButtonE2:FC<{
  children: string,
  primary?: boolean,
  disabled?: boolean
}> = ({ children, primary, disabled }) => {

  const buttonClassNames = cx({
    btn: true,
    disabled,
    primary
  })

  return(
    <button
      type='button'
      disabled={disabled}
      className={buttonClassNames}
    >
      {children}
    </button>
  )
}

export default ButtonE2
