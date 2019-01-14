import React from 'react';

class TodoControlBar extends React.Component {

  render(){
    return (
      <div>
        <button type="button" onClick={() => this.props.filterTodos('all')}>All</button>
        <button type="button" onClick={() => this.props.filterTodos('active')}>Active</button>
        <button type="button" onClick={() => this.props.filterTodos('completed')}>Completed</button>
      </div>
    )
  }
}

export default TodoControlBar;
