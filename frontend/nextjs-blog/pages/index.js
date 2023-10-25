import Head from "next/head";
import Link from "next/link";
import styles from "/styles/index.module.css";
import { useState, useEffect, useRef } from "react";

export default function about() {
  const [inputValue, setInputValue] = useState("");
  const [response, setResponse] = useState("");
  const [validity, setValidity] = useState("");
  const [rating, setRating] = useState(null);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/getinput", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputValue }),
      });
      const data = await res.json();
      setResponse(data);
      console.log(data);
      setRating(data.rating);
      setValidity(data.validity);
    } catch (error) {
      console.error(error);
    }
  };

  //scroller
  const containerRef = useRef(null);
  let scrollDistance = 0;

  useEffect(() => {
    const handleScroll = (event) => {
      scrollDistance += event.deltaY;
      const speed = 3;
      const container = containerRef.current;

      if (container) {
        container.scrollLeft = scrollDistance * speed;
        container.scrollTop += event.deltaY;
      }
    };

    document.addEventListener("wheel", handleScroll);

    return () => {
      document.removeEventListener("wheel", handleScroll);
    };
  }, []);




  return (
    <div>
      <Head>
        <title>FAKE NEWS</title>
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
        <h1 className={styles.title}>Welcome to KnowItAll</h1>

        <p className={styles.description}>
          Website to check if a news is fake or not
        </p>

        <div className={styles.innerform}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input className={styles.input} type="text" value={inputValue} onChange={handleChange} placeholder="Enter News here.." />
          <button className={styles.input} type="submit">Submit</button>
        </form>
        {response && (
          <p className={styles.description}>
            rating: {rating} validity: {validity}
          </p>
        )}
        </div>
        
        <div className={styles.scrollcontainer} ref={containerRef}>
          <div className={styles.scrollcontent}>
            
            <a
              href="https://www.bavarianfootballworks.com/2023/6/16/23757594/bayern-munich-prospect-paul-wanner-loan-2023-24-jamal-musiala-thomas-muller-germany-austria-tuchel?_gl=1*1ulchsx*"
              className={styles.card} 
            >
              <h3>Bayern Munich prospect Paul Wanner to go on loan in 2023/24? </h3>
              <p> With senior team minutes tough to come by, the youngster could be looking at a move to different proving grounds.</p>
            </a>

            <a
              href="https://www.theguardian.com/world/2023/jun/05/indian-train-crash-police-open-criminal-negligence-case"
              className={styles.card}
            >
              <h3>Indian train crash: </h3>
              <p> police open criminal negligence case</p>
            </a>

            <a
              href="https://indianexpress.com/article/india/uttarkashi-love-jihad-row-weighs-heavy-on-some-shopkeepers-residents-8653820/"
              className={styles.card}
            >
              <h3>In Uttarkashi, ‘love jihad’ :</h3>
              <p>
                {" "}
                In Uttarkashi, ‘love jihad’ row weighs heavy on some
                shopkeepers, residents
              </p>
            </a>

            <a
              href="https://www.ndtv.com/india-news/wrestler-sakshee-malikkh-resumes-railways-duty-2-days-after-meeting-amit-shah-4095208"
              className={styles.card}
            >
              <h3>"Resumed Duties But...":</h3>
              <p> Wrestlers Rejoin Work Days After Amit Shah Meet</p>
            </a>

            <a
              href="https://www.thehindu.com/news/national/other-states/several-killed-in-fresh-violence-in-manipurs-imphal-west-district/article66935042.ece"
              className={styles.card}
            >
              <h3>Violence in Manipur's Imphal West district: </h3>
              <p>
                3 killed, 4 injured in fresh violence in Manipur's Imphal West
                district
              </p>
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
        </div>
      </main>
      <footer className={styles.footer}>
        <h3>Developed by Muhammed Aslam T A, Neeraj S Panicker , Nikhil Praveen</h3>
      </footer>
    </div>
  );
}
