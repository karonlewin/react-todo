import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

class App extends Component {
  state = {
    todos: [{text: 'Fix dinner', completed: false},
            {text: 'Buy groceries', completed: true},
            {text: 'Wash the car', completed: false}],
    todoInput: ''
  }

  clearInput = (whatever) => {
    console.log('clearInput');
    this.setState({
      todoInput: ''
    })
  }

  updateInput = (text) => {
    this.setState({
      todoInput: text
    })
  }

  createTodo = (text) => {
    const todos = [ ...this.state.todos ];
    todos.push({text: text, completed: false});
    this.setState({ todos });
  }

  render() {
    return (
      <div>
        <TodoInput createTodo={this.createTodo} clearInput={this.clearInput} todoInput={this.state.todoInput} updateInput={this.updateInput}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
