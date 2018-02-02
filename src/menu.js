import React, { Component } from 'react'; 
import {Route, Link} from 'react-router-dom';
import './menu.css'



class Menu extends Component {
    render(){
        return(
            <div>
                <input id="toggle" type="checkbox"/>
                <label className="hamburger" htmlFor="toggle">
                    <div className="top"></div>
                    <div className="meat"></div>
                    <div className="bottom"></div>
                </label>

                <div className="nav">
                    <div className="nav-wrapper">
                        <nav className='innerNav'>
                        <Link to='/home' className='a' >Home</Link>
                        <Link to='/news' className='a' >News</Link>
                        <Link to='/cats' className='a'>Cats</Link>
                        <Link to='/chuck' className='a'>Chuck Norris</Link>
                        <Link to='/entertainment' className='a'>Entertainment</Link>
                        <Link to='/chat' className='a'>Continue Chatting</Link>   
                            
                        </nav>
                    </div>
                </div>

            </div>
        )
    }
}

export default Menu;


