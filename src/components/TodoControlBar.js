import React from 'react';

class TodoControlBar extends React.Component {

  render(){
    return (
      <div className="footer">
        {this.props.todos.filter(todo => !todo.completed).length} item{this.props.todos.filter(todo => !todo.completed).length > 1 ? 's' : ''} left
        <progress className="progress is-success" value={this.props.todos.filter(todo => todo.completed).length} max={this.props.todos.length}></progress>
        <br/>
        <button type="button" className="button is-info"
                onClick={() => this.props.filterTodos('all')}
                disabled={this.props.filterStatus === 'all'}>
          <span className="icon">
            <i className="fas fa-list-alt"></i>
          </span>
          <span>
            All
          </span>
        </button>
        <button type="button" className="button is-warning"
                onClick={() => this.props.filterTodos('active')}
                disabled={this.props.filterStatus === 'active'}>
          <span className="icon">
            <i className="fas fa-exclamation-circle"></i>
          </span>
          <span>
            Active
          </span>
        </button>
        <button type="button" className="button is-success"
                onClick={() => this.props.filterTodos('completed')}
                disabled={this.props.filterStatus === 'completed'}>
          <span className="icon">
            <i className="fas fa-check-circle"></i>
          </span>
          <span>
            Completed
          </span>
        </button>
        <button type="button" className="button is-danger" onClick={this.props.clearCompleted}>
          <span className="icon">
            <i className="fas fa-trash"></i>
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
