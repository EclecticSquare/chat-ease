
import React from "react";
import io from "socket.io-client";
import {Button} from 'react-bootstrap';
import Menu from './menu.js'
import './chatroom.css'

class Chat extends React.Component{
    constructor(props){
        super(props);

        const convoStarters = [ 'What is something you are obsessed with?',
        'What is something that is popular now that annoys you?',
        'If you had intro music, what song would it be? Why?',
        'What’s the most useful thing you own?']

        this.state = {
            username: '',
            message: '',
            messages: []
        };

        this.socket = io('localhost:8080');

        this.socket.on('RECEIVE_MESSAGE', data => {
            console.log(data);
            this.setState({messages: [...this.state.messages, data]});
            console.log(this.state.messages);
        })

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            })
            this.setState({message: ''});
            }
        
           
    
        }
    
       question = (arr, index) => {
           console.log(convoStarters)
       }

    render(){
        return (
            <div>
                <h1 className='display-4'>Keep the Conversation Going</h1>
                    <h3></h3>
                <div className="container">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title">Global Chat</div>
                                    <hr/>
                                    <div className="messages">
                                        {this.state.messages.map(message => {
                                            return (
                                                <div>{message.author}: {message.message}</div>
                                            )
                                        })}
                                    </div>

                                </div>
                                <div className="card-footer">
                                    <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control input-lg"/>
                                    <br/>
                                    <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                                    <br/>
                                    <Button onClick={this.sendMessage} className="btn btn-secondary form-control">Send</Button>
                                </div>
                            </div>
                            <Menu/>
                        </div>
                    </div>
              
        );
    }

    
    

}

export default Chat;