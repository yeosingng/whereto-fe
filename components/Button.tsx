import styled from 'styled-components'
import { forwardRef } from 'react'
import { myTheme } from  '../styles/myTheme'

type ButtonProps = React.HTMLProps<HTMLButtonElement>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, style, onClick, disabled, className }: any, ref) =>  {
  return (
    <StyledButton className={className} style={style} onClick={onClick} ref={ref} disabled={disabled}>
      {children}
    </StyledButton>
  )
})

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  border: 2px solid black;
  border-radius: 4px;
  background-color: white;
  font-weight: 500;
  font-size: 24px;
  :focus, :hover {
    outline: 0;
    background: ${myTheme.colors.secondary};
    cursor: pointer;
  };
  :blur {
    background: white;
  };
  opacity: ${({ disabled }) => disabled ? 0.25 : 1};
`

export default Button