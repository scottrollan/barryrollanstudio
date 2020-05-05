import React from 'react';
// import Map from "./components/Map";
import Oway from '../media/oway-banner.jpg';
import OM from '../media/om_haircare.jpg';

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

      <img src={OM} alt="" className="home-child" style={{ width: '100%' }} />
      {/* <Blog textStyle={textStyle}/> */}
      {/* <Map /> */}
    </div>
  );
};

export default Home;
