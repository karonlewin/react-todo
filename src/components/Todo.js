import React from 'react';

class Todo extends React.Component {
  handleToggle = event => {
    this.props.handleToggle(event.target.name);
  }

  render(){
    return (
      <div>
        <label className="checkbox">
          <input type="checkbox" onChange={this.handleToggle} defaultChecked={this.props.todo.completed} name={this.props.todo.text}/>
            <span style={{textDecoration: this.props.todo.completed ? 'line-through': 'initial'}}>
              {this.props.todo.text}
            </span>
        </label>
        <div className="inline-div">
          <button className="delete is-small" onClick={() => this.props.removeTodo(this.props.todo)}></button>
        </div>
      </div>
    )
  }
}

export default Todo;
