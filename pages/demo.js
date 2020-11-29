import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App - Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Go back to <Link href="/">index</Link>.
        </h1>
        <h1 className={styles.title}>
          Open this page <a href="/pretty-url/" target="_blank">in a new tab</a> and see it fail.
        </h1>
      </main>
    </div>
  )
}
