import React, { Component } from 'react';
import logo from './logo.svg'; // Tell Webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

class Header extends Component {
  // Import result is the URL of your image
  render( ) { return <img src={logo} alt="Logo" />;}
}

export default Header;
