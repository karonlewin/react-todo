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
      <section class="section">
        <div class="container">
            <i class="fas fa-3x fa-coffee has-text-primary"></i>
          <label class="label is-success is-large">TODOs</label>
          {this.filteredTodos().map((todo, index) => (
            <Todo todo={todo} key={todo.text} handleToggle={this.props.handleToggle} filterStatus={this.props.filterStatus}/>
          ))}
        </div>
      </section>
    )
  }
}

export default TodoList;
