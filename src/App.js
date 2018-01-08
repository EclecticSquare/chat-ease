import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Icon from 'react-fontawesome'
import Intro from './home.js'
import Cats from './cats.js'
import Chuck from './chuck.js'
import News from './news.js'
import Entertainment from './entertainment.js'
import Background from './candlesSparklers.jpg'
import {Navbar, NavItem} from 'react-bootstrap'



class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar>
          <Icon name="comments" size='5x'/>
          <h1 className='display-4 logo'>Chat-Ease</h1>
          <NavItem className='joy' id='joy'><Link to='/home' className='linkStyle'>Home</Link></NavItem>
          <NavItem className='joy'><Link to="/cats" className='linkStyle'>Dogs </Link></NavItem>
          <NavItem className='joy'><Link to="/chuck"  className='linkStyle'>Chuck Norris </Link></NavItem>
          <NavItem className='joy'><Link to="/news"  className='linkStyle'>News</Link></NavItem>
          <NavItem className='joy'> <Link to="/entertainment" className='linkStyle'>Entertainment</Link></NavItem>
        </Navbar> */}

           
            <Route path="/home" component={Intro}/> 
            <Route path="/cats" component={Cats}/>  
            <Route path="/chuck" component={Chuck}/> 
            <Route path="/news" component={News}/> 
            <Route path="/entertainment" component={Entertainment}/> 
            <Route exact path="/" component={Intro}/> 


      </div>
    );
  }
}






export default App;
