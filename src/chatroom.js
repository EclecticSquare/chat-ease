
import React from "react";
import io from "socket.io-client";
import {Button} from 'react-bootstrap';
import eachAfterTimer from 'each-after';
import Menu from './menu.js'
import './chatroom.css'

const eachAfter = eachAfterTimer()

class Chat extends React.Component{
    constructor(props){
        super(props);

        

        this.state = {
            username: '',
            message: '',
            messages: [],
            icebreakers: [] 
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
       componentDidMount(){
        const onEach = (element, index, processed, interval) => {
            this.setState({icebreakers: this.state.icebreakers.concat(element)}) 
        }

        const timeJSX = eachAfter (
            ['What is something you are obsessed with?',
            'What is something that is popular now that annoys you?',
            'If you had intro music, what song would it be? Why?',
            'What’s the most useful thing you own?',
            'If you opened a business, what kind of business would it be?',
            'Have you ever spoke in front of a large group of people? How did it go?',
            'Who had the biggest impact on the person you have become?',
            'Where is the most beautiful place you have been?',
            'Where do you spend most of your free time?',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''],
            6,
            onEach
        )
       
    }

    render(){
        

       

        //     function (element) {
        //         console.log(element)
        //         // return  
        //         //         <div className='questDiv'>
        //         //             <h1 className='questions'>{element}</h1><br/>
        //         //         </div>
                
        //     }
        //   )



        return (
            <div>
                <h1 className='display-4'>Keep the Conversation Going</h1>
                    <div>{this.state.icebreakers.map((element, index)=> {
                        return <div key={index} className='question'>{element}</div>
                    }
                    )}</div>
                <div className="container">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title">Global Chat</div>
                                    <hr/>
                                    <div className="messages">
                                        {this.state.messages.map((message,index) => {
                                            return (
                                                <div key={index}>{message.author}: {message.message}</div>
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