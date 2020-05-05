import React, { Component } from 'react';
import ServicesModal from './ServicesModal';
import cutting from '../media/cutting.jpg';
import coloring from '../media/coloring.jpg';
import smoothing from '../media/smoothing.jpg';
import './Services.css';

class Services extends Component {
  render() {
    return (
      <div className="page hide buttons-wrapper" id="services">
        <ServicesModal category="cutting" title="Cutting" src={cutting} />
        <ServicesModal category="coloring" title="Color" src={coloring} />
        <ServicesModal category="smoothing" title="Smoothing" src={smoothing} />
      </div>
    );
  }
}

export default Services;
