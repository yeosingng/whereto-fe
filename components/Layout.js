import styled from 'styled-components'
import Head from 'next/head'

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>Whereto?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        {props.children}
      </Main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}

const Main = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`

`