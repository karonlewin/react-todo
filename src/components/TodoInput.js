import React from 'react';

class TodoInput extends React.Component {
  inputRef = React.createRef();

  handleSubmit = event => {
    let text = this.inputRef.current.value.trim();
    if (text.length > 0){
      this.props.createTodo(text);
    } else {
      console.log('Please type something!')
    }
  }

  handleChange = event => {
    let text = this.inputRef.current.value.trim();
    this.props.updateInput(text);
  }

  handleKeyDown = event => {
    let ESCAPE_KEY = 27;
    let ENTER_KEY = 13;

    if (event.which === ESCAPE_KEY) {
      this.props.clearInput();
		} else if (event.which === ENTER_KEY) {
			this.handleSubmit(event);
		}
  }

  render(){
    return (
      <div>
        <input ref={this.inputRef} value={this.props.todoInput}
               onBlur={this.handleSubmit} onKeyDown={this.handleKeyDown}
               onChange={this.handleChange}/>
      </div>
    )
  }
}

export default TodoInput;
