import React, { Component } from 'react';
import axios from 'axios'
import Background from './images/catOnBlack.jpg'
import './css/cats.css'
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
                <img src={ Background } className='backImage' alt='Cat' />
                <button type="button" className="btn btn-outline-info  btn-lg btn-block">Info</button>
                <h1 className='textCat'>{this.state.cat}</h1>
                <button type="button" className="btn btn-outline-secondary" onClick={this.updateHandler}>Try Again</button>
                <Menu />
            </div>
            
            
           
        )
    }
}



export default Cats;
