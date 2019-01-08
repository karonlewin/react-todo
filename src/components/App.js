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
    this.setState({
      todoInput: ''
    })
  }

  updateInput = (text) => {
    this.setState({
      todoInput: text
    })
  }

  handleToggle = (todoText) => {
    let todos = [ ...this.state.todos ];
    let todoToToggle = todos.find(function(element){ return element.text === todoText; });
    todoToToggle.completed = !todoToToggle.completed;
    
    this.setState({ todos });
  }

  createTodo = (text) => {
    let todos = [ ...this.state.todos ];
    todos.push({text: text, completed: false});
    this.setState({ todos });
  }

  render() {
    return (
      <div>
        <TodoInput createTodo={this.createTodo} clearInput={this.clearInput} todoInput={this.state.todoInput} updateInput={this.updateInput}/>
        <TodoList todos={this.state.todos} handleToggle={this.handleToggle}/>
      </div>
    );
  }
}

export default App;
