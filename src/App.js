import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Intro from './home.js'
import Cats from './cats.js'
import Chuck from './chuck.js'
import News from './news.js'
import Entertainment from './entertainment.js'



class App extends Component {
  render() {
    return (
      <div>
       
            <div className='navBar'>
                  
                  <div className='Links' style={linkStyle}>
                  
                    <Link to='/home' style={ textStyle }>Home</Link>
                    <Link to="/cats" style={ textStyle }>Cats </Link>
                    <Link to="/chuck" style={ textStyle }>Chuck Norris </Link>
                    <Link to="/news" style={ textStyle } onClick={this.forceUpdate}>News</Link>
                    <Link to="/entertainment" style={ textStyle }  onClick={this.forceUpdate}>Entertainment</Link>
                  </div>
            </div>
          
            <Route path="/home" component={Intro}/> 
            <Route path="/cats" component={Cats}/>  
            <Route path="/chuck" component={Chuck}/> 
            <Route path="/news" component={News}/> 
            <Route path="/entertainment" component={Entertainment}/> 



      </div>
    );
  }
}

const textStyle = {
  textDecoration: 'none',
  padding: '75px 40px 40px 40px',
  fontSize: '30px',
  color: 'black'
  
}

const linkStyle = {
  textAlign: 'center',
  color: 'black'
}




export default App;
