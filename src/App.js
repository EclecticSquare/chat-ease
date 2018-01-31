import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Intro from './home.js'
import Cats from './cats.js'
import Chuck from './chuck.js'
import News from './news.js'
import Chat from './chatroom.js'
import Entertainment from './entertainment.js'
import Login from './login.js'





class App extends Component {
  render() {
    return (
      <div>
        

            <Route exact path="/" component={Intro}/>
            <Route path="/home" component={Intro}/> 
            <Route path="/cats" component={Cats}/>  
            <Route path="/chuck" component={Chuck}/> 
            <Route path="/news" component={News}/> 
            <Route path="/entertainment" component={Entertainment}/> 
            <Route path="/login" component={Login}/> 
            <Route path="/chat" component={Chat}/> 


      </div>
    );
  }
}






export default App;
