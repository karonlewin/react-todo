import React from 'react';

class TodoControlBar extends React.Component {

  render(){
    return (
      <div>
        {this.props.todosLeftCount} item{this.props.todosLeftCount > 1 ? 's' : ''} left
        <button type="button" onClick={() => this.props.filterTodos('all')}>All</button>
        <button type="button" onClick={() => this.props.filterTodos('active')}>Active</button>
        <button type="button" onClick={() => this.props.filterTodos('completed')}>Completed</button>
        <button type="button" onClick={this.props.clearCompleted}>Clear Completed</button>
      </div>
    )
  }
}

export default TodoControlBar;
