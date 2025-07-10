import React, { Component } from 'react';

class TodoClass extends Component {
  state = {
    task: '',
    todos: []
  };

  handleAdd = () => {
    if (this.state.task.trim()) {
      this.setState({
        todos: [...this.state.todos, this.state.task],
        task: ''
      });
    }
  };

  render() {
    return (
      <div>
        <input 
          value={this.state.task} 
          onChange={(e) => this.setState({ task: e.target.value })} 
        />
        <button onClick={this.handleAdd}>Add</button>
        <ul>
          {this.state.todos.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    );
  }
}

export default TodoClass;
