import React, { useState } from 'react';
import $ from 'jquery';
import { Button } from 'react-bootstrap';
import styles from './AlertMessageSent.module.css';

const OpenShopping = () => {
  const [success, setSuccess] = useState('Copy Code');

  const copy = () => {
    var copyText = $('#copyCode');
    copyText.select();
    document.execCommand('copy');
    setSuccess('Copied!');
  };

  const closePopup = () => {
    $(`#openShopping`).hide();
    setSuccess('Copy Code');
  };

  return (
    <div
      id="openShopping"
      className={styles.alertDiv}
      onClick={() => closePopup()}
    >
      <div
        className={[`${styles.openShopping} ${styles.fadeIn}`]}
        onClick={(e) => e.stopPropagation()}
      >
        <i className={`shopping bag icon`}></i>
        <h3>
          During checkout, you may need to enter this code in the "Gift card or
          discount code" field to complete your order.
        </h3>
        <input
          id="copyCode"
          readOnly
          style={{
            fontSize: 'large',
            border: 'none',
            backgroundColor: 'transparent',
          }}
          value="HHT2467"
        />
        <Button variant="secondary" onClick={() => copy()}>
          {success}
        </Button>
        <Button
          href="https://www.holistichairtribe.com/?rfsn=3519242.805024&amp;utm_source=refersion&amp;utm_medium=affiliate&amp;utm_campaign=3519242.805024"
          variant="secondary"
          style={{ display: success === 'Copy Code' ? 'none' : 'inherit' }}
        >
          Go Shopping
        </Button>
      </div>
    </div>
  );
};

export default OpenShopping;
