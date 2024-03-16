import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  render() {
    return (
      <div className="list">
        {/* Render the todo here from the props*/
        this.props.todos.map((todo, index) =>
        (
          <Todo key={index} todo={todo} removeClick={this.props.removeClick} />))
        
        }
      </div>
    );
  }
}
