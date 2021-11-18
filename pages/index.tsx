import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Page.module.css'

import test from "../public/test.jpg"
import React from 'react'
import PageTitle from '../components/PageTitle'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Scarlett Robotics</title>
      </Head>
      <Header />
      <PageTitle title="" background={test}/>
      <main className={styles.mainContent}>
        <h1>Scarlett Robotics</h1>
      </main>
    </>
  )
}

export default Home
