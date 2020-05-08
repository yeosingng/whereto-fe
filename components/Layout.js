import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import Head from 'next/head'
import theme from '../styles/theme'

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>whereto?</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>

      <ThemeProvider theme={theme}>
        <Main>
          {props.children}
        </Main>
      </ThemeProvider>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Roboto', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
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

const Main = styled.main`
  min-height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;
`
