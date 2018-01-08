import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import axios from 'axios'
import Background from './partyLights.jpg'
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import './chuck.css'







class Chuck extends Component {
    constructor() {
        super();

        this.toggle = this.toggle.bind(this);
        this.state = {
             chuck: [],
             dropdownOpen: false
             
        }
    }

    toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

    componentDidMount() {
        axios({
            method:'get',
            url: 'https://api.chucknorris.io/jokes/random',
            
        }).then(({data}) => {
            var chuckFact =[];
            chuckFact.push(data.value)
            console.log(chuckFact)
            this.setState({chuck: chuckFact})
            console.log(this.state.chuck)
         });
        
    }





    render() {
        return(
            <div className='backgroundImage'>
                <img src={ Background } className='introImage' />
                
                <h1 className='text'>{this.state.chuck}</h1>

                <Nav tabs vertical className='vertNav'>
                    <NavItem>
                        <NavLink href="#"><Link to='/home' className='navLinkStyle'>Home</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#"><Link to="/cats" className='navLinkStyle'>Cats</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#"><Link to="/news"  className='navLinkStyle'>News</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#"><Link to="/entertainment" className='navLinkStyle'>Entertainment</Link></NavLink>
                    </NavItem>
                </Nav>
                
                
                
                
                
                
                
                
                
                
                
                
                {/* <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
                        <DropdownToggle caret className='buttonDropdown chuckDrop'>
                        Let's Chat!
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem><Link to='/home' className='linkStyle'>Home</Link></DropdownItem>
                            <DropdownItem><Link to="/cats" className='linkStyle'>Cats </Link></DropdownItem>
                            <DropdownItem><Link to="/chuck"  className='linkStyle'>Chuck Norris </Link></DropdownItem>
                            <DropdownItem><Link to="/news"  className='linkStyle'>News</Link></DropdownItem>
                            <DropdownItem><Link to="/entertainment" className='linkStyle'>Entertainment</Link></DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown> */}
                
            </div>
            
            
           
        )
    }
}


export default Chuck;
