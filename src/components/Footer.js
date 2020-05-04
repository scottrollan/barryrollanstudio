import React from 'react';
// import styles from './AppointmentsBar.module.css';

const Footer = () => {
  return (
    <footer>
      <a
        // className={styles.bar}
        href="https://squareup.com/appointments/book/01469063-8cb8-4b57-9076-51933d0b1e9a/61SVRS8W8BGB2/services"
        id="footer"
      >
        make an appointment
      </a>
      <style jsx>
        {`
          footer {
            display: flex;
            justify-content: center;
            width: 100%;
            height: 80px;
            position: fixed;
            bottom: 0;
            left: 0;
            background-image: linear-gradient(90deg, #f04462, #c3122f, #f04462);
          }
          #footer {
            align-self: center;
            color: #f1f1f1;
            font-size: 22px;
            padding: 12px;
            text-transform: uppercase;
            font-weight: 600;
          }
          footer:hover {
            background: transparent;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
