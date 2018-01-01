import React, { Component } from 'react';
import './App.css';
import { Button, Card, Row, Col, Icon } from 'react-materialize';
import Background from './candlesSparklers.jpg';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Intro from './home.js'
import Cats from './cats.js'
import Chuck from './chuck.js'
import News from './news.js'


class App extends Component {
  render() {
    return (
      <div>
        <Intro />
            <div className='navBar'>
                  
                  <h1>Let's Talk >></h1>
                  <div className='Links'>
                    <Link to='/home' style={ textStyle }>Home</Link>
                    <Link to="/cats" style={ textStyle }>Cats </Link>
                    <Link to="/chuck" style={ textStyle }>Chuck Norris </Link>
                    <Link to="/news" style={ textStyle } onClick={this.forceUpdate}>News</Link>
                    {/* <Link to="/entertainment" style={ textStyle }>Entertainment</Link> */}
                  </div>
            </div>
          
            <Route path="/home" component={Intro}/> 
            <Route path="/cats" component={Cats}/>  
            <Route path="/chuck" component={Chuck}/> 
            <Route path="/news" component={News}/> 
            {/* <Route path="/entertainment" component={Selectors}/>  */}



      </div>
    );
  }
}

const textStyle = {
  textDecoration: 'none',
  padding: '40px',
  fontSize: '20px'
  
}






export default App;
