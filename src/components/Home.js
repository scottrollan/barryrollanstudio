import React from 'react';
import owayTop from '../media/oway-banner-top.jpg';
import oway from '../media/oway-banner.jpg';
import logo from '../media/o&mLogo.png';
import om from '../media/om_haircare.jpg';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.page}>
      <a
        href="https://www.oway.it/en/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <div className={styles.crossfade}> */}
        <img src={owayTop} alt="" className={styles.fader} />
        <img src={oway} alt="" className={styles.solid} />

        {/* </div> */}
      </a>
      <img src={logo} alt="" />
      <p className={styles.blurb}>
        Healthy hair begins when it’s free from stress. Reduce the chemical
        overload. We challenge the artificial norms of professional haircare
        with formulations that are both effective and gentle. Removing harsh
        chemicals wherever possible while including natural extracts and active
        minerals that deliver real benefits.
      </p>
      <img src={om} alt="" style={{ width: '100%' }} />
    </div>
  );
};

export default Home;
