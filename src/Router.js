import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link } from 'react-router-dom';

const {
  BrowserRouter,
  Route,
  Link
} = ReactRouterDOM

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact Us</h2>
  </div>
);

const BasicExample = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      <hr/>

      {/* The exact keyword ensures the '/' route matches only '/' and not '/anything-else' */}
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    </div>
  </BrowserRouter>
)

ReactDOM.render(
  <BasicExample />,
  document.getElementById('root')
);
