import React, { Component } from 'react';
import Bootstrap from 'react-bootstrap';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import axios from 'axios'
import Background from './partyConfet.jpg'







class Cats extends Component {
    constructor() {
        super();
        this.state = {
             cat: [],
        }
    }

    componentDidMount() {
        axios({
            method:'get',
            url: 'https://catfact.ninja/fact',
            
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
                
            </div>
            
            
           
        )
    }
}

const textStyle = {
    color:'white', 
    background: 'Indigo',
    position:'absolute', 
    top:'400px',
    textAlign: 'center',
    width: '45vw',
    marginLeft: '30%',
    fontSize: '50px',
    borderRadius: '3px'
}

export default Cats;
