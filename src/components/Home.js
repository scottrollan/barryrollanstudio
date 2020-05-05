import React from 'react';
import Oway from '../media/oway-banner.jpg';
import Logo from '../media/o&mLogo.png';
import OM from '../media/om_haircare.jpg';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.page}>
      <a
        href="https://www.oway.it/en/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={Oway}
          alt=""
          className="home-child"
          style={{ width: '100%' }}
        />
      </a>
      <img src={Logo} alt="" />
      <p className={styles.blurb}>
        Healthy hair begins when it’s free from stress. Reduce the chemical
        overload. We challenge the artificial norms of professional haircare
        with formulations that are both effective and gentle. Removing harsh
        chemicals wherever possible while including natural extracts and active
        minerals that deliver real benefits.
      </p>
      <img src={OM} alt="" className="home-child" style={{ width: '100%' }} />
    </div>
  );
};

export default Home;
