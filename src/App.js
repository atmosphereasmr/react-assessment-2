import React, { Component } from 'react'
import './App.css'
import { connect } from "react-redux";
import {isTyped, complete, deleteThis} from './reducers/reducer'

class Home extends Component {

    constructor() {
        super()
        this.state = {
            message: '',
            messages: []
        }
        this.onTextInput = this.onTextInput.bind(this)
    }

    onTextInput(e) {
        this.setState({message: e}, () => {
        this.props.isTyped(e) 
        console.log('props' + this.props)
    }
)
}

    submitClick() {
        if (this.props.message !== "") {
            this.props.messages.push([this.props.message])
            this.setState({todos: this.state.todos + 1}, () => {
                console.log(this.props)
            }), () => {
                this.props.isTyped(this.state.message), () => console.log("THE PROPS" + this.props)
            }
        } else {
            alert('You need to write more than that!')
        }
        const submitButton = document.getElementById('submitButton')
                          submitButton.value = ''
        this.setState({message: ''})
    }

    completed(a) {
        this.props.complete(a)
    }

    deleted(a) {
        this.props.deleteThis(a)
    }

    render() {
        return (
            <div>
                <div className="main-container">
                    <div className="left">
                        <div className="submit">
                            <h1>To do -</h1>
                            <input id="submitButton" onChange={(e) => this.onTextInput(e.target.value)}></input>
                            <button onClick={() => this.submitClick()}>Submit!</button>
                        </div>
                        <div className="todo-container">
                          {
                              this.props.messages.map((message) => {
                              return (
                                  <div>
                                  <div key={message.id} id={`${message.toString()}`} className="todo">
                                  <img id={`${message.toString()}` + 'complete'} src="http://www.clker.com/cliparts/l/n/a/E/b/t/check-mark-button-hi.png" style={{height:"25px", width:"25px"}} 
                                  onClick={() => this.completed(message.toString())}
                                  />
                                  
                                                    To do: {message}
                                                    {console.log(message.toString())}
                                                    <img onClick={() => this.deleted(message.toString())}  src="https://cdn1.iconfinder.com/data/icons/nuove/128x128/actions/button_cancel.png" style={{height:"25px", width:"25px"}} />
                                  </div>
                                  </div>
                              )
                          })}  
                        </div>
                    </div>
                    <div className="right">
                    <div className="todo-container">
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return(
      state
    )
  }
  
  export default connect(MapStateToProps, {isTyped, complete, deleteThis})(Home)