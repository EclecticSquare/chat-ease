import React, { Component } from 'react';
import Bootstrap, { DropdownButton } from 'react-bootstrap';
import Icon from 'react-fontawesome'
import Cats from './cats.js'
import Chuck from './chuck.js'
import News from './news.js'
import Entertainment from './entertainment.js'
import './home.css';
import Background from './candlesSparklers.jpg';
import {Route, Link} from 'react-router-dom';
import {Button, 
        ButtonGroup,
        ButtonDropdown,
        DropdownToggle,
        DropdownItem,
        DropdownMenu
        } from 'reactstrap'



class Intro extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }


    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       modal: false
    //     };
    
    //     this.toggle = this.toggle.bind(this);
    //   }
    
    //   toggle() {
    //     this.setState({
    //       modal: !this.state.modal
    //     });
    //   }
    
    render(){
        return(
            <div className='intro'>
               <img src={ Background } className='introImage' />
               <Icon name="comments" size='5x' className='icon'/>
               <h1 className='title h1-responsive'>Chat-Ease</h1>
               <h3 className="text-muted">"Being the Light of the Party <br/>is a Br-ease with Chat-Ease"</h3>
              
               
                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
                        <DropdownToggle caret className='buttonDropdown'>
                        Let's Chat!
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem><Link to='/home' className='linkStyle'>Home</Link></DropdownItem>
                            <DropdownItem><Link to="/cats" className='linkStyle'>Cats </Link></DropdownItem>
                            <DropdownItem><Link to="/chuck"  className='linkStyle'>Chuck Norris </Link></DropdownItem>
                            <DropdownItem><Link to="/news"  className='linkStyle'>News</Link></DropdownItem>
                            <DropdownItem><Link to="/entertainment" className='linkStyle'>Entertainment</Link></DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                
               
               
               
               
               
               
               
               {/* <Button color="danger"  size="lg" onClick={this.toggle}>{this.props.buttonLabel} Words</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal> */}


                
            </div>

        )
    }
}

export default Intro;

