import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <header className={styles.navbar}>
        <div className={styles.logo}>Proton</div>
        <nav>
          <ul className={styles.navLinks}>
            <li><a href="#">Products</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Proton for Business</a></li>
            <li><a href="#">Who we are</a></li>
            <li><a href="#">Resources and support</a></li>
            <li><button className={styles.signupBtn}>Create a free account</button></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>A better internet starts with privacy and freedom</h1>
        <p>
          Take control of your data with end-to-end encryption
        </p>
        <div className={styles.heroBtns}>
          <button className={styles.primaryBtn}>Create a free account</button>
          <button className={styles.secondaryBtn}>Compare Plans</button>
        </div>
      </section>

      {/* Apps Grid */}
      <section className={styles.features}>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>Proton Mail</h3>
            <p>Protect your inbox from spam, tracking, and ads with an encrypted email account.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Proton VPN</h3>
            <p>Browse privately and access content from anywhere with a fast VPN</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Proton Pass</h3>
            <p>Prevent data breaches by setting up strong passwords with an integrated password manager.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Proton Calendar</h3>
            <p>Keep your schedule private in a secure calendar app, becuase your life is your business.</p>
          </div>
        </div>
      </section>

      {/*Section */}
      <section className={styles.trust}>
        <h2>With Proton, your data belongs to you, not tech companies, governments, or hackers.</h2>
        <button className={styles.primaryBtn}>Get your encrypted email</button>
      </section>

      {/*Advantages */}
      <section className={styles.advantages}>
      <h2 className={styles.title}>Fundamentally different</h2>
      <p className={styles.text}>
        Proton was started in 2014 by scientists who met at CERN and shared a vision of an internet that defends freedom and puts people first.

Our transparency, open-source software, and rigorous encryption have earned Proton millions of users around the world — and the recommendation of the United Nations.

Tech companies like Google or Apple define privacy as “nobody can exploit your data, except for us.” We believe nobody should exploit your data, period.

Our technology and business are based upon this fundamentally stronger definition of privacy, backed also by Swiss privacy laws.
      </p>
      </section>
      <section className={styles.advantages}>
      <h2 className={styles.title}>Privacy for a better world</h2>
      <p className={styles.text}>
        At Proton, we believe that a better world begins with privacy, and this is at the heart of everything we do. Privacy isn’t just something we talk about; it’s a core belief and the reason Proton was created in the first place.

We also believe in people before profits, and our primary shareholder is the nonprofit Proton Foundation, whose mission is to fight for an open internet that promotes freedom of speech and freedom of information.
      </p>
      </section>
      <section className={styles.advantages}>
      <h2 className={styles.title}>End-to-end encryption</h2>
      <p className={styles.text}>
        Our end-to-end encryption and zero-access encryption mean that no one (not even Proton) has the technical means to access your data without your permission.

We don’t sell ads and can’t share your data. At Proton, privacy isn’t a promise, it’s mathematically ensured.
      </p>
      </section>
      <section className={styles.advantages}>
      <h2 className={styles.title}>Swiss privacy</h2>
      <p className={styles.text}>
        Proton is based in Switzerland, and your data does not go to the cloud. Instead, it stays under the protection of some of the world’s strongest privacy laws.

We are a neutral and safe haven for your personal data, committed to defending your freedom.
      </p>
      </section>
      <section className={styles.advantages}>
      <h2 className={styles.title}>Security made easy</h2>
      <p className={styles.text}>
        Proton’s services are so simple and intuitive that anyone can use them. Encryption is automatic and seamless.

Easy Switch lets you import and encrypt your data from Google, Outlook, or other services in just a couple of clicks.
      </p>
      </section>
      <section className={styles.advantages}>
      <h2 className={styles.title}>Open source and audited</h2>
      <p className={styles.text}>
        Since we were founded by scientists, we know that trust is earned through transparency and peer review.

All our apps are open source and independently audited by security experts so that anyone can use them, inspect them, and trust them.
      </p>
      </section>
      <section className={styles.advantages}>
      <h2 className={styles.title}>One account, any device</h2>
      <p className={styles.text}>
        Access your email, files, calendars, passwords, and VPN anywhere.

Get Proton apps on all your devices (Android, iPhone and iPad, Windows, macOS, Linux, and more) with one Proton Account for all our privacy-by-default services.
      </p>
      </section>
      <section className={styles.advantages}>
      <h2 className={styles.title}>Free forever</h2>
      <p className={styles.text}>
        Privacy is a human right, so our services are always available for free, and our encryption tech is free as well.

Proton has no ads and does not sell your data. You can support the service by upgrading to a paid account with more features.
      </p>
    </section>

      {/* Pricing Section */}
      <section className={styles.pricing}>
        <h2>Choose an internet where your privacy comes first</h2>
        <p>
          One account for all Proton services.
        </p>
        <div className={styles.pricingBtns}>
          <button className={styles.primaryBtn}>Create a free account</button>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <a href="#">Products</a>
          <a href="#">Privacy</a>
          <a href="#">Company</a>
          <a href="#">Connect</a>
        </div>
        <p>© 2025 Proton Clone. All rights reserved.</p>
      </footer>
    </main>
  );
}
