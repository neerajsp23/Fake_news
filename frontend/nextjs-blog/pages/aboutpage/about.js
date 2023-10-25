import Head from 'next/head';
import Link from 'next/link';
import styles from '/styles/about.module.css';

export default function Homepage(){
  return(
    <div>
    <Head>
      <title>
        FAKE NEWS
      </title>
    </Head>

    <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/" legacyBehavior>
              <a className={styles.navLink}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/aboutpage/about" legacyBehavior>
              <a className={styles.navLink}>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contactpage/contact" legacyBehavior>
              <a className={styles.navLink}>Contacts</a>
            </Link>
          </li>
        </ul>
      </nav>
    <main className={styles.main}>
      <h1 className={styles.mainheading}>About Our News Verification Service</h1>
            <p className={styles.description}>
              Welcome to our news verification service! We are dedicated to
              helping users determine the authenticity and reliability of news
              articles. In an era of rampant misinformation and fake news, it's
              important to be critical and discerning consumers of information.
            </p>
            <p className={styles.description}>
              Our service utilizes advanced algorithms and data analysis
              techniques to evaluate the credibility of news sources and
              individual articles. We employ a combination of factors, including
              source reputation, fact-checking, and cross-referencing with
              trusted sources, to provide users with a reliable assessment of
              the news they encounter.
            </p>
            <p className={styles.description}>
              How does it work? Simply enter the article
              into our search function, and our system will analyze the content
              and provide an assessment of its credibility. Please note that our
              service is intended to assist users in making informed decisions,
              but it's always important to exercise critical thinking and
              consider multiple sources when evaluating news.
            </p>
            <p className={styles.description}>
              We strive to promote media literacy and combat the spread of
              misinformation. By using our news verification service, you can
              contribute to a more informed and responsible society.
            </p>
            <p className={styles.description}>
              Thank you for choosing our service. Together, let's fight fake
              news and ensure that accurate information prevails.
            </p>

    </main>
    <footer className={styles.footer}>
      <h3>Developed by Muhammed Aslam T A, Neeraj S Panicker , Nikhil Praveen</h3>
    </footer>
    </div>
  );
}