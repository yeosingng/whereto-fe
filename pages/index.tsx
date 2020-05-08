import Head from 'next/head'
import styled from 'styled-components'
import { Layout, Header, Button } from '../components/'

export default function Home() {
  return (
    <Layout header>
      <Container>
        <Images />

        <ButtonContainer style={{ marginTop: 40 }}>
          <Button>
            Create
          </Button>

          <Button style={{ marginLeft: 40 }}>
            Join
          </Button>
        </ButtonContainer>

      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: auto;
`

const Images = styled.div`
  height: 200px;
  border: 1px solid black;
`

const ButtonContainer = styled.div`
  display: flex;
`
