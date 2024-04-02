import themeContext from "./themeContext";
import languageContext from "./languageContext";
import { useContext } from "react";


export const Navbar = () => {
  // get theme and lanauge contexts here
  const themeConsumer = useContext(themeContext);
  const languageConsumer = useContext(languageContext);
  const theme = themeConsumer.theme;
  const setTheme = themeConsumer.setTheme;


  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        {/* add eventListerner to it also change the content of the button based on the theme */}
        <button onClick={()=>{theme==="light"?setTheme("dark"):setTheme("light")}}>dark theme</button>
        <span>{/* Show active language here */
        languageConsumer.language
        
        }</span>
      </div>
    </div>
  );
};
