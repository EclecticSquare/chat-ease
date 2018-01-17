import React, { Component } from 'react';
import {Input, InputGroup, InputGroupAddon, Button} from 'reactstrap' 
import {Route, Link} from 'react-router-dom';
import io from 'socket.io-client'
import './chatroom.css'




class Chatroom extends Component {
    constructor(){
        super();
            this.state = {value: '',
                          list: []};
            
            this.handleChange=this.handleChange.bind(this);
            this.handleSubmit=this.handleSubmit.bind(this)


        this.socket = io();
        this.socket.on('connect', function(socket){
            alert('it worked')
            console.log('a user connected')
            })

        this.socket.on('chat message',function(){

        })

        this.socket.on('disconnect', function(){
            console.log('user disconnected')
        })
            
    }
    handleChange(event) {
        event.preventDefault();
        this.setState({value: event.target.value});
        

        // let newValue = event.target.value
        // this.state.list.push(newValue);
        
        console.log(this.state.value)
        // console.log(this.state.list)
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({value: event.target.value})
    }

    send() {
        this.socket.emit('chat message',this.state.value)
        return <li>{this.state.value}</li>
        
    }





    render() {
        let listJSX = this.state.list.map((msg,index) => {
            
        })


        return(
            <div className='chatHolder'>
                <div className='currentConvo'></div>
                
                <InputGroup className='inputSection'>
                    <Input  onSubmit={this.handleSubmit} onChange={this.handleChange}/>
                    <InputGroupAddon><Button onClick={this.send.bind(this)} color='info' className='sendButton'>Send</Button></InputGroupAddon>
                    
                </InputGroup>
            
                {/* <div>{this.state.value}</div> */}
            </div>
        )
    }
}

export default Chatroom;