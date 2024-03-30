import { Component } from "react";

class Person extends Component {
  // Define appropriate lifecycle method to show alert here

  render() {
    const { img, email } = this.props.person;
    return (
      <div className="person">
        <b onClick={this.props.removeClick}>X</b>
        <img alt={email} src={img} />
        <p>{email}</p>
      </div>
    );
  }

  componentWillUnmount(){
    alert(`A person with eamil ${this.props.person.email} was removed from your network!`)
  }


}

export default Person;
