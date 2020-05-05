import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  activeButton = () => {};

  render() {
    return (
      <div className="ui three item menu">
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/services" className="item">
          Services
        </Link>
        {/* <Link to="/color" className="item">
          O&amp;M Color
        </Link> */}
        <Link to="/contact" className="item">
          Contact
        </Link>
      </div>
    );
  }
}

export default Header;
