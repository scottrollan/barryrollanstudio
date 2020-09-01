import React from 'react';
import owayTop from '../../media/oway-banner-top.jpg';
import oway from '../../media/oway-banner.jpg';
// import logo from '../../media/o&mLogo.png';
// import om from '../../media/om_haircare.jpg';
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
          src={owayTop}
          alt=""
          className={styles.fader}
          style={{ width: '100%' }}
        />
        <img
          src={oway}
          alt=""
          className={styles.solid}
          style={{ padding: 0 }}
        />
      </a>
      <p className={styles.blurb}>
        Healthy hair begins when it’s free from stress. Reduce the chemical
        overload. We challenge the artificial norms of professional haircare
        with formulations that are both effective and gentle. Removing harsh
        chemicals wherever possible while including natural extracts and active
        minerals that deliver real benefits.
      </p>
      {/* <img src={logo} alt="" style={{ padding: 0 }} /> */}
      <div className={styles.saleWrapper}>
        <span> Weekly Online Sale</span>
        <div id="rfsn_img_70361"></div>
      </div>
      <div className={styles.saleWrapper}>
        <span> Monthly Online Sale</span>
        <div id="rfsn_img_68795"></div>
      </div>
      {/* <img src={om} alt="" style={{ padding: 0 }} /> */}
    </div>
  );
};

export default Home;
