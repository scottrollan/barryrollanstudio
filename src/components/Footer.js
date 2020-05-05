import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div>
      <div className={`ui container ${styles.infoLinks}`}>
        <hr />
        <div className="ul list">
          <a
            href="https://www.google.com/maps/place/Sola+Salon+Studios/@33.925096,-84.336078,15z/data=!4m5!3m4!1s0x0:0x7993ca9f24f031a4!8m2!3d33.925096!4d-84.336078"
            className={`item ${styles.contactItem}`}
          >
            <i class={`map marker alternate icon ${styles.contactIcon}`}></i>
            <p>Sola Salon Studios | Dunwoody | GA</p>
          </a>

          <a
            href="mailto:barry@barryrollanstudio.com"
            className={`item ${styles.contactItem}`}
          >
            <i class={`paper plane outline icon ${styles.contactIcon}`}></i>
            <p>barry@barryrollanstudio.com</p>
          </a>
          <a href="sms:4042023562" className={`item ${styles.contactItem}`}>
            <i class={`mobile alternate icon ${styles.contactIcon}`}></i>
            <p>(404)202-3562</p>
          </a>
        </div>
        <hr />
      </div>
      <div className={styles.buttonDiv}>
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
    </div>
  );
};

export default Footer;
