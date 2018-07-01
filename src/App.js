import React, { Component } from "react";
import HeaderComponents from "./components/HeaderComponents";
import FormSubmit from "./components/FormSubmit";

import List from "./components/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    todos: [
        {id: 1, name: "shoppinlll", complete: false},
        {id: 2, name: "swiming", complete: false}
    ],
    message: ""
 };
//โคตรงง
 this.onChangeMessage = this.onChangeMessage.bind(this);
 this.onSubmitMessage = this.onSubmitMessage.bind(this);
 }
  onChangeMessage(e) {
    this.setState({message: e.target.value});

  }
  onSubmitMessage(e){
    e.preventDefault();
   
    let oldTodos = this.state.todos;
    let todosLength = this.state.todos.length;
    let lastId = this.state.todos[todosLength - 1].id
    let newMessage = {
      id: lastId +1, name: this.state.message, complete: false};
    oldTodos.push(newMessage);
    this.setState({todos: oldTodos});
  }
  render() {
    return (
      <div
        style={{
          borderColor: "#e12c6a",
          borderWidth: 2,
          borderStyle: "solid",
          borderRadius: 4,
          width: 1024,
          margin: "auto",
          marginTop: 20
        }}
      >
        <HeaderComponents />
         <List todos={this.state.todos}/>
        
         
         <FormSubmit onChangeMessage = {this.onChangeMessage}
          onSubmitMessage = {this.onSubmitMessage} />
      </div>
    );
  }
}

export default App;