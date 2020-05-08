import styled from 'styled-components'

export default function Header() {
  return (
    <Head>
      <Title>
        whereto?
      </Title>
    </Head>
  )
}

const Head = styled.div`
  display: flex;
  width: 100vw;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.orange};
`

const Title = styled.h1`
  font-size: 30px;
  color: white;
`