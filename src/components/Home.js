import React from 'react';
// import Map from "./components/Map";
import Oway from '../media/oway-banner.jpg';
import OM from '../media/om_haircare.jpg';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className="page" id="home">
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
      <div className="col-md-12 center-block home-child" id={styles.buttonDiv}>
        <a
          className={styles.buttons}
          href="https://www.holistichairtribe.com/?rfsn=3519242.805024&utm_source=refersion&utm_medium=affiliate&utm_campaign=3519242.805024"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop Products
        </a>

        <a
          className={styles.buttons}
          href="https://squareup.com/appointments/book/01469063-8cb8-4b57-9076-51933d0b1e9a/61SVRS8W8BGB2/services"
          target="-blank"
          rel="noopener noreferrer"
        >
          Book Appointments
        </a>
      </div>

      <img src={OM} alt="" className="home-child" style={{ width: '100%' }} />
      {/* <Blog textStyle={textStyle}/> */}
      {/* <Map /> */}
    </div>
  );
};

export default Home;
