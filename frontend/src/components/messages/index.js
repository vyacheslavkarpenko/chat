import React, { Component } from 'react';
import axios from 'axios';
import './style.css'
class Messages extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: []
    }
  }
  
  componentDidMount(){
    axios.get('/api/v1/messages')
    .then (response =>  {
      console.log(response)
      this.setState({
          list: response.data.messages
        })
      console.log(this.state.list)
    })
    .catch(error=> console.log(error))
  }

  render() {
    const messages = this.state.list.reverse()
    return (
      <div className="overflow_messages">
          {messages.map( message => {
              return (
                <div className="single-list" key={message.id}>
                  <h4>{message.title}</h4>
                  <p>{message.content}</p>
                </div>
              )
          })}
      </div>
 
    );
  }
}

export default Messages;
