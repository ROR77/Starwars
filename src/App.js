import React, { Component } from 'react';
// import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import Character from "./Character";
import Header from "./Header";
import SortRadioButton from './SortRadioButton';
 import axios from 'axios';
import './App.css';
// import Skywalker from '../images/Luke Skywalker.jpg';


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
              characters: [],
               searchTerm: '',
                alphabetical: 'az'
                };
              this.handleChange = this.handleChange.bind(this);

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
             .catch(error => {
             console.log(error);
         });
    }

    handleChange(event) {
   const target = event.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;

   this.setState({
     [name]: value
   });
 }

    render() {
      let sortedUsers;

     if (this.state.alphabetical === "az") {
        sortedUsers = this.state.characters.sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1
     );
    } else {
     sortedUsers = this.state.characters.sort((a, b) =>
     a.name.first < b.name.first ? 1 : -1
     );
  }

  let filteredUsers = sortedUsers;

  if (this.state.searchTerm)
    filteredUsers = this.state.characters.filter(u =>
      u.name.startsWith(this.state.searchTerm)
    );

    const userNames = filteredUsers.map(u => {
      return <Character key={u.name} name={u.name} height={u.height} weight={u.mass} />;
 });

 return (
   <div>
     <form onSubmit={this.handleSubmit}>
       <label>
         Search for character:
         <input
           type="text"
           name="searchTerm"
           value={this.state.searchTerm}
           onChange={this.handleChange}
         />
       </label>
       <input type="submit" value="Submit" />
     </form>
     <select
       name="alphabetical"
       value={this.state.alphabetical}
       onChange={this.handleChange}
     >
       <option value="az">
         A to Z
       </option>
       <option value="za">Z to A</option>
     </select>

     {userNames}

   </div>
 )

           const characterList = this.state.characters.map(c => (
             <Character

             // return  <img src={Skywalker}/>

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
