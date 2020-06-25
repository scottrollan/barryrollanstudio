import React from 'react';
import { Carousel } from 'react-bootstrap';
import OmBanner from '../../media/omBanner.jpg';
import Logo from '../../media/o&mLogo.png';
import Myth1 from '../../media/Myths-1.jpg';
import Myth2 from '../../media/Myths-2.jpg';
import Myth3 from '../../media/Myths-3.jpg';
import Myth4 from '../../media/Myths-4.jpg';
import Myth5 from '../../media/Myths-5.jpg';

const omStyle = {
  margin: '35px 0',
  color: '#593e00',
  fontFamily: 'Raleway, sans-serif',
  fontWeight: '800',
  fontSize: '28px',
  textAlign: 'center',
};
const Color = () => {
  return (
    <div style={{ minHeight: '100vh' }} id="color">
      <p style={omStyle}>
        <b>O&amp;M AMMONIA, RESORCINOL AND PPD-FREE COLOR</b>
      </p>
      <img src={OmBanner} alt="" style={{ width: '100%' }} />
      <div id="jHeader">
        <div className="container">
          <p
            className="text-center myth"
            style={{ fontSize: '3vw', fontWeight: '800', marginTop: '3rem' }}
          >
            Mythbusting non-toxic color with O&amp;M Cor
          </p>
        </div>
      </div>

      <Carousel style={{ maxWidth: '100%', height: 'auto' }} interval={3000}>
        <Carousel.Item style={{ width: '100%', height: 'auto' }}>
          <img src={Myth1} alt="" style={{ width: '100%', height: 'auto' }} />
        </Carousel.Item>
        <Carousel.Item style={{ width: '100%', height: 'auto' }}>
          <img src={Myth2} alt="" style={{ width: '100%', height: 'auto' }} />
        </Carousel.Item>
        <Carousel.Item style={{ width: '100%', height: 'auto' }}>
          <img src={Myth3} alt="" style={{ width: '100%', height: 'auto' }} />
        </Carousel.Item>
        <Carousel.Item style={{ width: '100%', height: 'auto' }}>
          <img src={Myth4} alt="" style={{ width: '100%', height: 'auto' }} />
        </Carousel.Item>
        <Carousel.Item style={{ width: '100%', height: 'auto' }}>
          <img src={Myth5} alt="" style={{ width: '100%', height: 'auto' }} />
        </Carousel.Item>
      </Carousel>

      <div
        id="originalMineral"
        style={{
          background: 'transparent',
          padding: '12px 12px 80px 12px',
          width: '100%',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={Logo} alt="" />
          <p>
            Healthy hair begins when it’s free from stress. Reduce the chemical
            overload. We challenge the artificial norms of professional haircare
            with formulations that are both effective and gentle. Removing harsh
            chemicals wherever possible while including natural extracts and
            active minerals that deliver real benefits.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Color;
