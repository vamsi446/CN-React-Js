import { Component } from "react";
class ComponentB extends Component {
  constructor() {
    super();
    this.state = {
      name: "Component B",
    };
    console.log("Component B Constructor");
  }
  static getDerivedStateFromProps(){
    console.log("Component B Derived State");
    return null;
  }
  componentDidMount(){
    console.log("Component B didMount");
  }
  render() {
    console.log("Component B render");
    return (
      <>
        <h1>{this.state.name}</h1>
      </>
    );
  }
}
export default ComponentB;
