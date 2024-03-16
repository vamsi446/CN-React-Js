import { Component } from "react";

export class Todo extends Component {
  render() {
    return (
      <div className="todo">
        <p>{this.props.todo.text}</p>
        {/* Add the onClick event to handle removal of the todos */}
        <button onClick={()=>this.props.removeClick(this.props.todo.text)}>x</button>
      </div>
    );
  }
}
