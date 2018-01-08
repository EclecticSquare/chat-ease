import React, { Component } from 'react';
import Bootstrap from 'react-bootstrap';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import axios from 'axios'
import Background from './discoBall.jpg'
import randnum from 'random-number-between'
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import './entertainment.css'








class Entertainment extends Component {
    constructor() {
        super();

        this.toggle = this.toggle.bind(this);
        
        this.state = {
             news: [],
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
            url: 'https://newsapi.org/v2/top-headlines?sources=mtv-news,buzzfeed,entertainment-weekly&apiKey=' + key,
            
        }).then(({data}) => {
            var title =[];
            var description =[];
            title.push(data.articles[rand].title)
            description.push(data.articles[rand].description)
            var finalInfo = 'Title: \n' + title + ' \n Summary: '  + description

            console.log(finalInfo)
            this.setState({news: finalInfo})
            console.log(this.state.news)
         });
        
    }





    render() {
        return(
            <div className='backgroundImage'>
                <img src={ Background } className='introImage' />
                
                <h1 className='text' style={textStyle}>{this.state.news}</h1>
            
                <Nav tabs vertical className='vertNav'>
                    <NavItem>
                        <NavLink href="#"><Link to='/home' className='navLinkStyle2'>Home</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#"><Link to="/cats" className='navLinkStyle2'>Cats</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#"><Link to="/news"  className='navLinkStyle2'>News</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#"><Link to="/chuck"  className='navLinkStyle2'>Chuck Norris </Link></NavLink>
                    </NavItem>
                </Nav>
                
            </div>
            
            
           
        )
    }
}

const key = 'ba3db1d153d84fe385b66276373849c3';

var rand = randnum(1, 20, 1);
console.log(rand);

const textStyle = {
    color:'white', 
    background: 'silver',
    position:'absolute', 
    top:'400px',
    textAlign: 'center',
    width: '60vw',
    marginLeft: '25%',
    fontSize: '40px',
    borderRadius: '3px'
}

export default Entertainment;