import { FC } from 'react'

import './ButtonE1.css'

const ButtonE1:FC<{
  children: string,
  primary?: boolean,
  disabled?: boolean
}> = ({ children, primary, disabled }) => {
  let classNames = 'btn'
  if(primary) classNames += ' btnPrimary'
  if(disabled) classNames += ' btnDisabled'

  return(
    <button
      type='button'
      disabled={disabled}
      className={classNames}
    >
      {children}
    </button>
  )
}

export default ButtonE1
