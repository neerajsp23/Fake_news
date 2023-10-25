import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {

  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue); // Print the input value in the console
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Fake News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to KnowItAll
        </h1>

        <p className={styles.description}>
          Website to check if a news is fake or not
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Submit</button>
        </form>

        <div className={styles.grid}>
          <a href="https://www.theguardian.com/world/2023/jun/05/indian-train-crash-police-open-criminal-negligence-case" className={styles.card}>
            <h3>Indian train crash: </h3>
            <p> police open criminal negligence case</p>
          </a>

          <a href="https://www.ndtv.com/india-news/wrestler-sakshee-malikkh-resumes-railways-duty-2-days-after-meeting-amit-shah-4095208" className={styles.card}>
            <h3>"Resumed Duties But...":</h3>
            <p> Wrestlers Rejoin Work Days After Amit Shah Meet</p>
          </a>

          <a
            href="https://www.thehindu.com/news/national/other-states/several-killed-in-fresh-violence-in-manipurs-imphal-west-district/article66935042.ece"
            className={styles.card}
          >
            <h3>Violence in Manipur's Imphal West district: </h3>
            <p>3 killed, 4 injured in fresh violence in Manipur's Imphal West district</p>
          </a>

          <a
            href="https://indianexpress.com/article/political-pulse/nitish-kumar-joint-opposition-congress-patna-bihar-8647155/"
            className={styles.card}
          >
            <h3>Joint Oppn meeting: </h3>
            <p>
            Amid date issues, Nitish says parties must send their chiefs
            </p>
          </a>
        </div>
      </main>

      <footer>
        Developed by Muhammed Aslam , Neeraj S Panicker , Nikhil Praveen
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}