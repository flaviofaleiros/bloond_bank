import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../components/Shared/Header';
import Scheduling from '../components/Scheduling';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Banco de sangue</title>
        <meta name="description" content="Agendamento para doação de sangue" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <Header/>
        <Scheduling/>
      </main>

      <footer className={styles.footer}>
          Chapter FRONTAL{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
      </footer>
    </div>
  )
}
