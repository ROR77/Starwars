import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
              character: {}
         }
    }

    componentDidMount() {
        fetch("https://swapi.co/api/people/7")
        fetch("https://swapi.co/api/people/8")
            .then(response => response.json())
             // .then(response => console.log(response))
            .then(data => {
                this.setState({
                    character: data
                })
            })
    }

    render() {
        return (
            <div>
            <h1>  {  this.state.character.name}</h1>
            <h1>  {  this.state.character.name}</h1>
            <h1>  {  this.state.character.height}</h1>
            <h1>  {  this.state.character.mass}</h1>
            <h1>  {  this.state.character.hair_color}</h1>
            <h1>  {  this.state.character.species}</h1>

            </div>
        )
    }
}

export default App
