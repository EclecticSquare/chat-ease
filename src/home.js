import React, { Component } from 'react';
import Directions from './directions.js'
import './home.css';
// import Background from '.images/candlesSparklers.jpg';
import {Link} from 'react-router-dom';
import {ButtonDropdown,
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
                        <DropdownItem><Link to="/login" className='linkStyle'>Join the Chatroom</Link></DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
                
                
                
     
            </div>

        )
    }
}

export default Intro;

