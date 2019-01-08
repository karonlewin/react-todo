import React from 'react';

class Todo extends React.Component {
  handleCheckChange = event => {

  }

  render(){
    return (
      <div>
        <input type="checkbox" checked={this.props.todo.completed} onChange={this.handleCheckChange}/>
        {this.props.todo.text}
      </div>
    )
  }
}

export default Todo;
