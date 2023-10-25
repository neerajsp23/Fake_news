import Head from "next/head";
import Link from "next/link";
import styles from "/styles/contact.module.css";

export default function contact() {
  return (
    <div className={styles.container}>
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
      <h1 className={styles.title} id="t1">Contact Us</h1>
            <p className={styles.description}>We value your feedback, questions, and suggestions. If you have any
            inquiries or need assistance, please feel free to reach out to us
            using the contact information below. We are here to help! Contact,
            Information:</p>
            Email:{" "}
              <a href="mailto:nrjsp23@gamil.com">
                <p>nrjsp23@gamil.com</p>
              </a>
            <p className={styles.description}>Whether you have concerns about our services, want to report
            an issue, or simply want to learn more about what we offer, we are
            eager to hear from you. Additionally, if you prefer, you can use the
            contact form on this page to send us a message directly. Please
            provide your name, email address, and a detailed message, and we
            will get back to you as soon as possible. We strive to provide
            prompt and personalized responses to ensure your satisfaction. Your
            input is valuable to us as we continuously improve our services and
            make your experience with us even better. Thank you for choosing our
            website. We look forward to hearing from you!"
            </p>
      </main>
      {/*
      <div className={styles.contacticons}>
        <ul>
          <li>
            <a href="#" style="--clr:#1070ff"><i class="fab fa-edge"></i></a>
          </li>
          <li>
            <a href="#" style="--clr:#ff9f10"><i class="fab fa-firefox"></i></a>
          </li>
          <li>
            <a href="#" style="--clr:#58ff10"><i class="fab fa-chrome"></i></a>
          </li>
          <li>
            <a href="#" style="--clr:#ff1048"><i class="fab fa-opera"></i></a>
          </li>
        </ul>

      </div>
      */}
      <footer className={styles.footer}>
        <h3>Developed by Muhammed Aslam T A, Neeraj S Panicker , Nikhil Praveen</h3>
      </footer>
    </div>
  );
}
