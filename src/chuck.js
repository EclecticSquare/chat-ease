import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Bootstrap from 'bootstrap';
import axios from 'axios'
import Background from './images/white-thought-bubble.png'
import Background2 from './images/chuck1.png'
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import './chuck.css'
import Menu from './menu.js'







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
        this.getJokes()
    }

        updateHandler = () => {
           this.getJokes()
               
        }

        getJokes = () => {
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
                <img src={ Background } className='introImage1' />
                <img src={ Background2 } className='introImage2' />
                <h1 className='textChuck'>{this.state.chuck}</h1>
                <button type="button" className="btn btn-outline-warning" onClick={this.updateHandler}>Try Again</button>
                <Menu />
                   
            </div>
            
            
           
        )
    }
}


export default Chuck;
