import React, { useState } from 'react';
import services from './servicesArray';
import { Button } from 'react-bootstrap';
import styles from './Services.module.css';
import './ServiceModal.css';

const ServicesModal = (props) => {
  const [show, setShow] = useState(false);

  const src = props.src;

  return (
    <div className={styles.serviceBtn} id={`${props.category}Btn`}>
      <div className={styles.buttonContainer} onClick={() => setShow(true)}>
        <p
          style={{ maxHeight: '100%', fontSize: '2vh' }}
          onClick={() => setShow(true)}
        >
          {props.category}
        </p>
        <img src={src} alt="" />
      </div>

      {/* MODAL STARTS */}
      <div onClick={() => setShow(false)}>
        <div
          className={styles.background}
          style={{
            display: show === true ? 'flex' : 'none',
          }}
        >
          <div className={styles.content} onClick={(e) => e.stopPropagation()}>
            <div className={styles.header}>{props.title} Services</div>
            <div className={styles.content}>
              {services.data.map((d) => (
                <div
                  key={d.id}
                  style={{
                    display: d.category !== props.category ? 'none' : 'inherit',
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
              <Button variant="secondary" onClick={() => setShow(false)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesModal;
