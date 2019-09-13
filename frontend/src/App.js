import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './components/messages/index'
import Messages from './components/messages/index';
import NewMessage from './components/new_message';
import sendNewMessage from './components/send'

class App extends Component {
  render() {
    return (


      <div className="container">
        <div className="jumbotron">
          <h3>Simple messanger</h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-2">
              <h4>Users here</h4>
            </div>
            <div className="col-10">
              <Messages />
              <NewMessage onNewMessage={this.addNewList} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
