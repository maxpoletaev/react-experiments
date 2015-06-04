import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <ul className="navbar">
        <li className="navbar_item"><a href="/">Item 1</a></li>
        <li className="navbar_item"><a href="/products">Item 2</a></li>
      </ul>
    );
  }
}

export default Navbar;
