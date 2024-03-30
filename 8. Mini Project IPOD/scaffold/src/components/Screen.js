import React from 'react';
import './css/screen.css';
import SideMenu from './SideMenu';
import Controls from './Controls';
import Games from './Games';
import Music from './Music';
import Coverflow from './Coverflow';


class Screen extends React.Component{

// Display the sidemenu, coverflow, games,Music etc here
  render(){

    return (
      <>
      <SideMenu></SideMenu>
      <Controls></Controls>
      </>
    );
  }

}

export default Screen;

