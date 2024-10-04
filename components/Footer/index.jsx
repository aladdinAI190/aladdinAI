import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';

function Footer() {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img className={styles.image} src="/images/logo2.png" alt="logo" />
          <div>Empowering memecoin traders with AI toolkit</div>
        </div>
        <div className={styles.supportContainer}>
          <div className={styles.title1}>Aladdin AI</div>
          <div><Link className={styles.title2} href="/">About Us</Link></div>
          <div><Link className={styles.title2} href="/">Product</Link></div>
        </div>
        <div className={styles.supportContainer}>
          <div className={styles.title1}>Support</div>
          <div><Link className={styles.title2} href="/">Help center</Link></div>
          <div><Link className={styles.title2} href="/">Terms of service</Link></div>
          <div><Link className={styles.title2} href="/">Privacy Policy</Link></div>
        </div>
      </div>
    </div>

  );
}

export default Footer;
