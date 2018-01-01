import React, { Component } from 'react';
import Bootstrap from 'react-bootstrap';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import axios from 'axios'
import Background from './discoBall.jpg'
import randnum from 'random-number-between'







class Entertainment extends Component {
    constructor() {
        super();
        this.state = {
             news: [],
        }
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
                
                
            </div>
            
            
           
        )
    }
}

const key = 'ba3db1d153d84fe385b66276373849c3';

var rand = randnum(1, 20, 1);
console.log(rand);

const textStyle = {
    color:'white', 
    background: 'Indigo',
    position:'absolute', 
    top:'400px',
    textAlign: 'center',
    width: '60vw',
    marginLeft: '25%',
    fontSize: '40px',
    borderRadius: '3px'
}

export default Entertainment;