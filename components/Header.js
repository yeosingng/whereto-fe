import styled from 'styled-components'

export default function Header() {
  return (
    <Container>
      <Title>
        whereto?
      </Title>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.orange};
  box-shadow: -2px -3px 33px -7px rgba(0,0,0,0.75);
`

const Title = styled.header`
  font-size: 40px;
  color: white;
  font-weight: 500;
`