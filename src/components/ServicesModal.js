import React, { Component } from 'react';
import services from './servicesArray';

import styles from './ServicesModal.module.css';

class ServicesModal extends Component {
  state = {
    show: false,
  };

  render(props) {
    const src = this.props.src;
    console.log(src);
    return (
      <div className="serviceBtn" id={`${this.props.category}Btn`}>
        <div
          className="button-container"
          onClick={() => this.setState({ show: true })}
        >
          <p style={{ maxHeight: '100%' }}>{this.props.category}</p>
          <img src={src} alt="" />
        </div>

        <div
          className={`modal ${styles.background}`}
          onClick={() => this.setState({ show: false })}
          style={{
            visibility: this.state.show ? 'visible' : 'hidden',
          }}
        >
          <div className={styles.content} onClick={(e) => e.stopPropagation()}>
            <div className={`header ${styles.header}`}>
              {this.props.title} Services
            </div>
            <div className="content">
              {services.data.map((d) => (
                <div
                  key={d.id}
                  style={{
                    display:
                      d.category !== this.props.category ? 'none' : 'inherit',
                  }}
                >
                  <hr />
                  <p>
                    <strong>
                      <em>{d.service} </em>
                    </strong>
                    {d.descr}
                  </p>
                  <p style={{ textAlign: 'right' }}>
                    <em>{d.price}</em>
                  </p>
                </div>
              ))}
            </div>

            <div>
              <button
                className="ui secondary"
                onClick={() => this.setState({ show: false })}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesModal;
