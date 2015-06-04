import Navbar from './components/navbar'
import React from 'react';

class Layout extends React.Component {
  render() {
    return (
      <div className="viewport">
        <Navbar />

        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
