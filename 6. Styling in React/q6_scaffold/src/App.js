import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }
  handleAdd = (todoText) => {
    // complete the function to add a new Todo to the list
    const newTodo = { text: todoText };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
    
  };

  handleRemove = (text) => {
    console.log(text);
    // complete the function to remove the Todo from the list
    const index = this.state.todos.findIndex((todo)=>todo.text === text);
    const updatedTodos = this.state.todos.filter((todo, i) => i !== index);
    this.setState({
      todos: updatedTodos
    });
  };
  render() {
    return (
      <div className="App">
        <span>Todo</span>
        {/* Pass the todos list and function as props to utilize those in the component for adding and removing */}
        <Form addClick={this.handleAdd}/>
        <List todos={this.state.todos} removeClick ={this.handleRemove}  />
      </div>
    );
  }
}
