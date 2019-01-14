import React from 'react';
import Todo from './Todo'

class TodoList extends React.Component {

  filteredTodos = () => {
    if (this.props.filterStatus === 'completed'){
      return this.props.todos.filter(todo => todo.completed);
    } else if (this.props.filterStatus === 'active'){
      return this.props.todos.filter(todo => !todo.completed);
    } else {
      return this.props.todos;
    }
  }

  render(){
    return (
      <div>
        TodoList
        {this.filteredTodos().map((todo, index) => (
          <Todo todo={todo} key={todo.text} handleToggle={this.props.handleToggle} filterStatus={this.props.filterStatus}/>
        ))}
      </div>
    )
  }
}

export default TodoList;
