import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div>Hello World!</div>
    </Layout>
  )
}


const Header = styled.div`
  color: red;
`