import './css/controls.css';
import leftArrow from './images/left-arrow.png';
import rightArrow from './images/right-arrow.png';
import bottomArrow from './images/arrow-pointing-downwards.png';

// introduce your own eventhandler for eac button Here.
function Controls() {
    return (
      <section id="controls" onClick={controlClick}>
        <div id="wheel">
          <span 
            id="menu-button"
            className="buttons" 
            style={ {top: 20} }
            onClick={menuClick}
          >
            Menu
          </span>
          <img className="buttons" draggable="false"
            src={leftArrow} alt="left" 
            style={ {left: 13, width: 40} }>
          </img>
          <img className="buttons" draggable="false"
            src={rightArrow} alt="right" 
            style={ {right: 13, width: 40} }>
          </img>
          <img className="buttons" draggable="false"
            src={bottomArrow} alt="bottom" 
            style={ {bottom: 13, width: 30, height: 37} }>
          </img>
          <div id="ok-button" onClick={okClick}>
            <b>OK</b>
          </div>
        </div>
      </section>
    );
  }

  function okClick(){

  }

  function menuClick(){

  }

  
  function controlClick(){

  }
  
  export default Controls;
  