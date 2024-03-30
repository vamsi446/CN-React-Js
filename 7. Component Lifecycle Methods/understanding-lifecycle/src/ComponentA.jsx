import { Component } from "react";
class ComponentA extends Component {
  constructor() {
    super();
    this.state = {
      name: "Component A",
    };
    console.log("Component A Constructor");
  }

  static getDerivedStateFromProps() {
    console.log("Component A Derived State");
    return null;
  }

  componentDidMount() {
    console.log("Component A didMount");
  }
  render() {
    console.log("Component A render");
    return (
      <>
        <h1>{this.state.name}</h1>
      </>
    );
  }
}
export default ComponentA;
