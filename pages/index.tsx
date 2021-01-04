import Head from 'next/head'
import { ReactElement } from 'react'
import styles from '../styles/Home.module.css'

export default function Home(): ReactElement {
  return (
    <div className={styles.container}>
      <Head>
        <title>Under Construction!</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Coding for the web. From Finland." />
      </Head>

      <main className={styles.main}>
        <h1>Hi!</h1>
      </main>
    </div>
  )
}
