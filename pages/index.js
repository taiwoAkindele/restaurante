import Head from 'next/head'
import Image from 'next/image'
import { Features, ProductList } from '../components'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>La Restaurante</title>
        <meta name="description" content="NextJs Restaurant Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Features />
      <ProductList />
    </div>
  )
}
