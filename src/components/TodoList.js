import React from 'react';
import Todo from './Todo'

class TodoList extends React.Component {
  render(){
    return (
      <div>
        TodoList
        {this.props.todos.map((todo, index) => (
          <Todo todo={todo} key={index} handleToggle={this.props.handleToggle}/>
        ))}
      </div>
    )
  }
}

export default TodoList;
