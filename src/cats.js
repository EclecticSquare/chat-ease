import React, { Component } from 'react';
import Bootstrap from 'bootstrap';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import axios from 'axios'
import Background from './catOnBlack.jpg'
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import './cats.css'
import Menu from './menu.js'






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
        this.getCats()  
    }

    updateHandler = () => {
            this.getCats()
    }

    getCats = () =>     {
        axios({
            method:'get',
            url: '/cats',
            
        }).then(({data}) => {
            var catFact =[];
            console.log(data.fact)
            catFact.push(data.fact)
            console.log(catFact)
            this.setState({cat: catFact})
            console.log(this.state.cat)
         });
    }

    render() {
        return(
            <div className='backgroundImage'>
                <img src={ Background } className='backImage' />
                <button type="button" className="btn btn-outline-info  btn-lg btn-block">Info</button>
                <h1 className='textCat'>{this.state.cat}</h1>
                <button type="button" className="btn btn-outline-secondary" onClick={this.updateHandler}>Try Again</button>
                <Menu />
            </div>
            
            
           
        )
    }
}



export default Cats;
