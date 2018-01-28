import React, { Component } from 'react'; 
import {Route, Link} from 'react-router-dom';
import './menu.css'



class Menu extends Component {
    render(){
        return(
            <div>
                <input id="toggle" type="checkbox"/>
                <label className="hamburger" for="toggle">
                    <div className="top"></div>
                    <div className="meat"></div>
                    <div className="bottom"></div>
                </label>

                <div className="nav">
                    <div class="nav-wrapper">
                        <nav className='innerNav'>
                        <Link to='/home' ><a className='menuItem' href="#">Home</a></Link>
                        <Link to='/news' ><a className='menuItem' href="#">News</a></Link>
                        <Link to='/cats' ><a className='menuItem' href="#">Cats</a></Link>
                        <Link to='/chuck' ><a className='menuItem' href="#">Chuck Norris</a></Link>
                        <Link to='/entertainment' ><a className='menuItem' href="#">Entertainment</a></Link>
                        <Link to='/chat' ><a className='menuItem' href="#">Continue Chatting</a></Link>   
                            
                        </nav>
                    </div>
                </div>

            </div>
        )
    }
}

export default Menu;


