import React, { Component } from 'react';
import Bootstrap, { DropdownButton } from 'react-bootstrap';
import Icon from 'react-fontawesome'
import Cats from './cats.js'
import Chuck from './chuck.js'
import News from './news.js'
import Login from './login.js'
import Directions from './directions.js'
import Entertainment from './entertainment.js'
import Chatroom from './chatroom.js'
import './home.css';
import Background from './candlesSparklers.jpg';
import {Route, Link} from 'react-router-dom';
import {Button, 
        ButtonGroup,
        ButtonDropdown,
        DropdownToggle,
        DropdownItem,
        DropdownMenu
        } from 'reactstrap'



class Intro extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

    render(){
        return(
            <div className='intro'>
               <h1 className='title h1-responsive'>ChatEase</h1>
               <h3 className="text-muted">"Being the Light of the Party <br/>is a Brease with ChatEase"</h3>
               <Directions/>

               
                <ButtonDropdown className='buttonDropdown' isOpen={this.state.dropdownOpen} toggle={this.toggle} >
                    <DropdownToggle caret >
                    Start A Coversation
                    </DropdownToggle>
                    <DropdownMenu>
                        
                        <DropdownItem><Link to='/home' className='linkStyle'>Home</Link></DropdownItem>
                        <DropdownItem><Link to="/cats" className='linkStyle'>Cats </Link></DropdownItem>
                        <DropdownItem><Link to="/chuck"  className='linkStyle'>Chuck Norris </Link></DropdownItem>
                        <DropdownItem><Link to="/news"  className='linkStyle'>News</Link></DropdownItem>
                        <DropdownItem><Link to="/entertainment" className='linkStyle'>Entertainment</Link></DropdownItem>
                        <DropdownItem><Link to="/chatroom" className='linkStyle'>Continue</Link></DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
                <Login/>
                
                
     
            </div>

        )
    }
}

export default Intro;

