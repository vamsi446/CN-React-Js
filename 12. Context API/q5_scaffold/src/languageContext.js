import { createContext, useContext, useState } from "react";

export const languageContext = createContext();

// debug the below custom hook
export const getLanguageValue = () => {
  const value = useContext(languageContext);
  console.log(value);
  return value;
};

// debug the below context Provider
export const LanguageContextProvider = ({children}) => {
  const [language, setLanguage] = useState("English");

  return (
    <languageContext.Provider
      value={{ language, setLanguage }}
    >
      {children}
    </languageContext.Provider>
  );
};
