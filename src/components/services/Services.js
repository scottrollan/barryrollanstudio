import React, { Component } from 'react';
import ServicesModal from './ServicesModal';
import Footer from '../footer/Footer';
import cutting from '../../media/cutting.jpg';
import coloring from '../../media/coloring.jpg';
import smoothing from '../../media/smoothing.jpg';
import styles from './Services.module.css';

class Services extends Component {
  render() {
    return (
      <div className={styles.page} id="services">
        <div
          className={[`${styles.hide} ${styles.buttonsWrapper}`]}
          style={{
            maxWidth: '900px !important',
          }}
        >
          <ServicesModal category="cutting" title="Cutting" src={cutting} />
          <ServicesModal category="coloring" title="Color" src={coloring} />
          <ServicesModal
            category="smoothing"
            title="Smoothing"
            src={smoothing}
          />
        </div>
        <div className={styles.footerWrapper}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Services;
