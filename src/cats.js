import React, { Component } from 'react';
import Bootstrap from 'react-bootstrap';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import axios from 'axios'
import Background from './partyConfet.jpg'
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import './cats.css'







class Cats extends Component {
    constructor() {
        super();

        this.toggle = this.toggle.bind(this);
        this.state = {
             cat: [],
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
            url: 'https://catfact.ninja/fact?max_length=150',
            
        }).then(({data}) => {
            var catFact =[];
            catFact.push(data.fact)
            console.log(catFact)
            this.setState({cat: catFact})
            console.log(this.state.cat)
         });
        
    }





    render() {
        return(
            <div className='backgroundImage'>
                <img src={ Background } className='introImage' />
                
                <h1 className='text' style={textStyle}>{this.state.cat}</h1>
                
                <Nav tabs vertical className='vertNav'>
                    <NavItem>
                        <NavLink href="#"><Link to='/home' className='navLinkStyle1'>Home</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#"><Link to="/chuck"  className='navLinkStyle1'>Chuck Norris </Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#"><Link to="/news"  className='navLinkStyle1'>News</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#"><Link to="/entertainment" className='navLinkStyle1'>Entertainment</Link></NavLink>
                    </NavItem>
                </Nav>
            </div>
            
            
           
        )
    }
}

const textStyle = {
    color:'white', 
    background: 'darkslateblue',
    position:'absolute', 
    top:'400px',
    textAlign: 'center',
    width: '45vw',
    marginLeft: '30%',
    fontSize: '50px',
    borderRadius: '3px'
}

export default Cats;
