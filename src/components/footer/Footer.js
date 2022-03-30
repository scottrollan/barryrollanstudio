import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="ui container">
        <div className={styles.infoLinks}>
          <a
            href="https://www.google.com/maps/place/Sola+Salon+Studios/@33.925096,-84.336078,15z/data=!4m5!3m4!1s0x0:0x7993ca9f24f031a4!8m2!3d33.925096!4d-84.336078"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactItem}
            style={{ flexGrow: '1' }}
          >
            <i
              className={`map marker alternate icon ${styles.contactIcon}`}
            ></i>
            <p>Sola Salon Studios | Dunwoody | GA</p>
          </a>

          <a
            href="mailto:barry@barryrollanstudio.com"
            className={styles.contactItem}
            style={{ flexGrow: '1' }}
          >
            <i className={`paper plane outline icon ${styles.contactIcon}`}></i>
            <p>barry@barryrollanstudio.com</p>
          </a>

          <a
            href="sms:4042023562"
            className={styles.contactItem}
            style={{ flexGrow: '1' }}
          >
            <i className={`mobile alternate icon ${styles.contactIcon}`}></i>
            <p>(404)202-3562</p>
          </a>
        </div>
        {/* <div className={styles.buttonDiv}>
          <Button
            href="https://blissful-heyrovsky-c07cbc.netlify.app/"
            variant="secondary"
            className={styles.button}
          >
            Shop Products
          </Button>

          <Button
            href="https://squareup.com/appointments/book/01469063-8cb8-4b57-9076-51933d0b1e9a/61SVRS8W8BGB2/services"
            variant="secondary"
            className={styles.button}
          >
            Book Appointments
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
