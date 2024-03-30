import React from 'react';
import './App.css';
import Screen from './components/Screen';


class App extends React.Component{


  // Handle the rotate event fired from the control component

  // If ok button is clicked,  open the selected component

  // If menu button is clicked, go back to the menu screen

  render(){
    return (
      <>
      <Screen></Screen>
      </>
    );
  }

}

export default App;

