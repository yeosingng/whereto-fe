import { Layout, Input, Button } from '../../components'
import styled from 'styled-components'
import Link from 'next/link'
import { useState } from 'react'

export default function Create() {
  const [name, setName] = useState('')

  return (
    <Layout header={true}>
      <Container>
        <form>
          <NamePrompt>Creating a room, what's your name?</NamePrompt>

          <InputContainer>
            <Input onChange={(e) => setName(e.currentTarget.value)} />

            <Link href={'/'}>
              <NextButton disabled={name === ''} >
                Next
              </NextButton>
            </Link>
          </InputContainer>
        </form>
      </Container>
    </Layout>
  )
}

const NextButton = styled(Button)`
  margin-left: 20px;

  @media screen and (max-width: 300px) {
    margin: 20px auto 0px;
  }
`

const InputContainer = styled.div`
  display: flex;
  margin-top: 40px;

  @media screen and (max-width: 300px) {
    flex-direction: column;
  }
`

const NamePrompt = styled.p`
  text-align: center;
  font-size: 20px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px auto auto;
`