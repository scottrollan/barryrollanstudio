import React from 'react';
import Footer from '../footer/Footer';
import owayTop from '../../media/oway-banner-top.jpg';
import oway from '../../media/oway-banner.jpg';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.page}>
      <div className="ui container" style={{ maxWidth: '900px !important' }}>
        <h1 className={styles.fadeDown}>Barry Rollan Salon Studio</h1>
        <p className={[`${styles.blurb} ${styles.fadeUp}`]}>
          Healthy hair begins when it’s free from stress. Reduce the chemical
          overload. We challenge the artificial norms of professional haircare
          with formulations that are both effective and gentle. Removing harsh
          chemicals wherever possible while including natural extracts and
          active minerals that deliver real benefits.
        </p>
        <a
          href="https://www.oway.it/en/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.imageWrapper}
        >
          <img src={owayTop} alt="" className={styles.fader} />
          <img src={oway} alt="" className={styles.solid} />
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
