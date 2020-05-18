import styled from 'styled-components'
import { forwardRef } from 'react'

type ButtonProps = React.HTMLProps<HTMLButtonElement>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, style, onClick, href }: any, ref) =>  {
  return (
    <StyledButton style={style} onClick={onClick} ref={ref}>
      {children}
    </StyledButton>
  )
})

const StyledAnchor = styled.a`
  text-decoration: inherit;
  color: inherit;
`

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
    background: grey;
    cursor: pointer;
  }
  :blur {
    background: white;
  }
`

export default Button