import styled, { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { myTheme } from '../styles/myTheme'
import Header from '../components/Header'

type Layout = {
  header: boolean,
}

export default function Layout({ children, header }) {
  return (
    <>
      <Head>
        <title>whereto?</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>

      <ThemeProvider theme={myTheme}>
        <Main>
          {header && <Header />}
          {children}
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
  padding: 0 0 30px 0;
  display: flex;
  flex-direction: column;

`
