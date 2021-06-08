import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import Header from '../components/Shared/Header';
import DonorRegistration from '../components/DonorRegistration';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Banco de sangue</title>
        <meta name="description" content="Cadastro para doação de sangue" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header/>
        <DonorRegistration />
      </main>

      <footer className={styles.footer}>
          Chapter FRONTAL{' '}
          <span className={styles.logo}>
            <Image src="/Frontal.svg" alt="Chapter FRONTAL Logo" width={32} height={32} />
          </span>
      </footer>
    </div>
  )
}
