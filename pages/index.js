import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from "../src/component/Header";
import Gnb from "../src/component/Gnb";
import Best from "../src/component/main/Best";
import Banner from "../src/component/main/Banner";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Book Store</title>
        <meta name='description' content='Book Store'></meta>
      </Head>
      
      <Header/>
      <Gnb/>
      
      <main>
        <div>
          <Banner/>
          <Best/>
          <div>신상품</div>
          <div>첫 구매 이벤트</div>
          <div>MD가 추천하는 상품을 한 눈에 보기</div>
          <div>Event</div>
        </div>
      </main>
    </div>

    /*<div className={styles.container}>
      <Head>
        <title>Book 커머스</title>
        <meta name='description' content='Book 커머스홈'></meta>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>*/
  )
}
