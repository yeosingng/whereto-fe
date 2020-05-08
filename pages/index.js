import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Text from '../components/Text'

export default function Home() {
  return (
    <Layout>
      <Header />
      <Text>Hello World!</Text>
    </Layout>
  )
}
