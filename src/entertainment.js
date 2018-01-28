import React, { Component } from 'react';
import Bootstrap from 'react-bootstrap';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import axios from 'axios'
import Background from './tabloid.jpg'
import randnum from 'random-number-between'
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import './entertainment.css'
import Menu from './menu.js'








class Entertainment extends Component {
    constructor() {
        super();

        this.toggle = this.toggle.bind(this);
        
        this.state = {
             entTitle: [],
             entSummary:[],
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
            

            console.log(title, description)
            this.setState({entTitle: title, entSummary: description })
            
         });
        
    }





    render() {
        return(
            <div className='backgroundImage'>
                <img src={ Background } className='introImage' />
                <div className="textBackground">
                    <h1 className='textEnt'>{this.state.entTitle}</h1>
                </div>
                <Menu />
            </div>
            
            
           
        )
    }
}

const key = 'ba3db1d153d84fe385b66276373849c3';

var rand = randnum(1, 20, 1);
console.log(rand);



export default Entertainment;