import styled from 'styled-components'

type ButtonProps = {
  children: React.ReactNode,
  style?: Object,
}

export default function Button(props: ButtonProps) {
  const { children, style } = props
  return (
    <StyledButton style={style}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
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