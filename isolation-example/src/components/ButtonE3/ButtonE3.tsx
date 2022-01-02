import { FC } from 'react'
import styled from "styled-components"

const Button = styled.button`
  background: ${
  ({disabled, primary}: {disabled?: boolean, primary?: boolean}) => {
    if(disabled) return '#5c5c5c'
    if(primary) return '#40a9ff'
    return `#ffffff`
  }
};
  color: ${
  ({disabled, primary}: {disabled?: boolean, primary?: boolean}) => {
    if(disabled || primary) {
      return '#ffffff'
    }
    return '#5c5c5c'
  }
};
  height: 60px;
  width: 200px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
`

const ButtonE3:FC<{
  children: string,
  primary?: boolean,
  disabled?: boolean
}> = ({ children, primary, disabled }) => {
  return(
    <Button
      type='button'
      primary={primary}
      disabled={disabled}
    >
      {children}
    </Button>
  )
}

export default ButtonE3
