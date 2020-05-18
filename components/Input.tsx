import styled from 'styled-components'

type InputProps = React.HTMLProps<HTMLInputElement>

export default function Input({ children, style, onChange }: InputProps) {
  return (
    <StyledInput onChange={onChange} style={style} />
  )
}

const StyledInput = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 2px solid black;
  min-width: 200px;
  font-size: 18px;
  :focus {
    outline: 0;
    border: 3px solid black;
  };
`