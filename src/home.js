import React, { Component } from 'react';
import Bootstrap from 'react-bootstrap';
import './home.css';
import Background from './candlesSparklers.jpg';
import { Button, Card, Row, Col, Icon } from 'react-materialize';
import {Route, Link} from 'react-router-dom';



class Intro extends Component {
    
    
    render(){
        return(
            <div className='intro'>
               <img src={ Background } className='introImage' />
               <h1 className='title h1-responsive'>Chat-Ease</h1>
               <h3 className="text-muted">"Being the Light of the Party <br/>is a Br-ease with Chat-Ease"</h3>
               
                {/* <Button waves='light'className='indigo darken-4 btn-large'><Link to="/chat"> Chat </Link><Icon right>chat_bubble</Icon></Button>  */}
                
            
        
                  
                
               
               
               
            </div>

        )
    }
}

export default Intro;

