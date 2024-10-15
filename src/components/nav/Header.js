import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

class Header extends React.Component {
  activeButton = () => {};

  render() {
    return (
      <div className="ui two item menu">
        <Link to="/" className={`item ${styles.menuItem}`}>
          HOME
        </Link>
        <Link to="/services" className={`item ${styles.menuItem}`}>
          SERVICES
        </Link>
        {/* <Link to="/color" className={`item ${styles.menuItem}`}>
          O&amp;M Color
        </Link> */}
        {/* <Link to="/contact" className={`item ${styles.menuItem}`}>
          CONTACT
        </Link> */}
      </div>
    );
  }
}

export default Header;
