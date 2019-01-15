import React from 'react';

class TodoControlBar extends React.Component {

  render(){
    return (
      <div class="footer">
        {this.props.todos.filter(todo => !todo.completed).length} item{this.props.todos.filter(todo => !todo.completed).length > 1 ? 's' : ''} left
        <progress class="progress is-success" value={this.props.todos.filter(todo => todo.completed).length} max={this.props.todos.length}></progress>
        <br/>
        <button type="button" class="button is-info" onClick={() => this.props.filterTodos('all')}>
          <span class="icon">
            <i class="fas fa-list-alt"></i>
          </span>
          <span>
            All
          </span>
        </button>
        <button type="button" class="button is-warning" onClick={() => this.props.filterTodos('active')}>
          <span class="icon">
            <i class="fas fa-exclamation-circle"></i>
          </span>
          <span>
            Active
          </span>
        </button>
        <button type="button" class="button is-success" onClick={() => this.props.filterTodos('completed')}>
          <span class="icon">
            <i class="fas fa-check-circle"></i>
          </span>
          <span>
            Completed
          </span>
        </button>
        <button type="button" class="button is-danger" onClick={this.props.clearCompleted}>
          <span class="icon">
            <i class="fas fa-trash"></i>
          </span>
          <span>
            Clear Completed
          </span>
        </button>
      </div>
    )
  }
}

export default TodoControlBar;
