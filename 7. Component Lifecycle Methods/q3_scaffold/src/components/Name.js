import React from "react";

export default class Name extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "Coding Ninjas",
      curIndex: 0,
      currentName: ""
    };
  }

  // This function adds a character to the string.
  typeWriterEffect = () => {
    this.setState((prevState) => {
      return {
        curIndex: prevState.curIndex + 1,
        currentName: prevState.fullName.substring(0, prevState.curIndex)
      };
    });
  };

  // Required lifecycle methods here
  componentDidMount() {
    if (this.props.showName) {
      // Start the typewriter effect when component mounts if showName is true
      this.timer = setInterval(this.typeWriterEffect, 500); // Adjust typing speed here
    }
  }

  componentDidUpdate(prevProps) {
    // Check if showName prop has changed
    if (this.props.showName !== prevProps.showName) {
      if (this.props.showName) {
        // If showName is true, start typewriter effect
        this.timer = setInterval(this.typeWriterEffect, 500); // Adjust typing speed here
      } else {
        // If showName is false, stop typewriter effect
        clearInterval(this.timer);
      }
    }
  }

  componentWillUnmount() {
    // Stop the typewriter effect when component unmounts
    clearInterval(this.timer);
  }


  render() {
    return <h1>{this.state.currentName}</h1>;
  }
}
