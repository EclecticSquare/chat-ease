import React, { Component } from 'react';
import Bootstrap from 'react-bootstrap';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import axios from 'axios'
import Background from './news.jpg'
import randnum from 'random-number-between'
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import './news.css'
import Menu from './menu.js'






class News extends Component {
    constructor() {
        super();

        this.toggle = this.toggle.bind(this);
        
        this.state = {
             newsTitle: [],
             newsSummary: []
        }
    }
   

    componentDidMount() {
        axios({
            method:'get',
            url: 'https://newsapi.org/v2/top-headlines?sources=the-next-web,the-verge,bbc-news,abc-news,cnn&apiKey=' + key,
            
        }).then(({data}) => {
            var title =[];
            var description =[];
            title.push(data.articles[rand].title)
            description.push(data.articles[rand].description)
        
            this.setState({newsTitle: title, newsSummary: description})
            console.log(this.state.newsTitle)
            console.log(this.state.newsSummary)
         });
        
    }

    toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }



    render() {
        return(
            <div className='backgroundImage'>
                <img src={ Background } className='introImage' />
                
                <h1 className='textNews'>{this.state.newsTitle}</h1>
                    <h3 className='textNews'>{this.state.newsSummary}</h3>

                
                <Menu />
            </div>
            
            
           
        )
    }
}

const key = 'ba3db1d153d84fe385b66276373849c3';

var rand = randnum(1, 20, 1);
console.log(rand);



export default News;