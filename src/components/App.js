import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import TodoControlBar from './TodoControlBar';

class App extends Component {
  state = {
    todos: [{text: 'Fix the computer', completed: false},
            {text: 'Buy groceries', completed: true},
            {text: 'Wash the car', completed: false}],
    todoInput: '',
    filterStatus: 'all'
  }

  clearInput = () => {
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

  filterTodos = (newStatus) => {
    this.setState({
      filterStatus: newStatus
    })
  }

  clearCompleted = () => {
    let todos = [ ...this.state.todos ];
    this.setState({todos: todos.filter(todo => !todo.completed)})
  }

  createTodo = (text) => {
    let todos = [ ...this.state.todos ];
    todos.push({text: text, completed: false});
    this.setState({ todos });
    this.clearInput();
  }

  removeTodo = (todo) => {
    let todos = [ ...this.state.todos ];
    this.setState({todos: todos.filter(item => item.text !== todo.text)})
  }

  render() {
    return (
      <div className="container">
        <TodoInput createTodo={this.createTodo} clearInput={this.clearInput} todoInput={this.state.todoInput} updateInput={this.updateInput}/>
        <TodoList todos={this.state.todos} handleToggle={this.handleToggle} filterStatus={this.state.filterStatus} removeTodo={this.removeTodo}/>
        <TodoControlBar filterTodos={this.filterTodos} todos={this.state.todos} clearCompleted={this.clearCompleted} filterStatus={this.state.filterStatus}/>
      </div>
    );
  }
}

export default App;
