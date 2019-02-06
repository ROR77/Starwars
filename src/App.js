import React, { Component } from 'react';
// import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import Character from "./Character";
import Header from "./Header";
 import axios from 'axios';
import './App.css';


class Home extends React.Component{
  render() {
    return(
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}

class About extends React.Component{
  render() {
    return(
      <div>
        <h2>About</h2>
      </div>
    );
  }
}

class Contact extends React.Component{
  render() {
    return(
      <div>
        <h2>Contact</h2>
      </div>
    );
  }
}

class Routes extends React.Component {
  render() {
    return(
  <Router>
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
  </Router>
     );
  }
}

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
              // character: {}
              characters: []
         };
    }

    componentDidMount() {
        axios.get("https://swapi.co/api/people/")
            // .then(response => response.json())
              // .then(response => {console.log(response)})

            .then(response => {
              // let character = data.results;
              // console.log('character')
                this.setState({characters: response.data.results});
             })
    }

    render() {

           const characterList = this.state.characters.map(c => (
             <Character
               key={c.name}
               name={c.name}
               height={c.height}
               weight={c.mass}
               />
        ));


        // return (
        //     <div>
        //     <h1>  {"Character: " + this.state.character.name}</h1>
        //     <h1>  {"Height:" + this.state.character.height + "cm"}</h1>
        //     <h1>  {"Weight: " + this.state.character.mass + "kg"} </h1>
        //     <h1>  {"Hair Colour: " +  this.state.character.hair_color}</h1>
        //     <h1>  {  this.state.character.species}</h1>
        //
        //     </div>
        // )
        return <div className="columns is-multiline">{characterList}</div>
    }
}

export default App
