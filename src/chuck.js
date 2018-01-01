import React, { Component } from 'react';
import Bootstrap from 'react-bootstrap';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import axios from 'axios'
import Background from './partyLights.jpg'







class Chuck extends Component {
    constructor() {
        super();
        this.state = {
             chuck: [],
        }
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
                
                <h1 className='text' style={textStyle}>{this.state.chuck}</h1>
                
                
            </div>
            
            
           
        )
    }
}

const textStyle = {
    color:'white', 
    background: 'Indigo',
    position:'absolute', 
    bottom:'-700px',
    textAlign: 'center',
    width: '45vw',
    marginLeft: '30%',
    fontSize: '50px',
    borderRadius: '3px'
}

export default Chuck;
