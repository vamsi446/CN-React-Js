import { createContext, useContext, useState } from "react";

// create post context here
const PostContext = createContext();
function useValue() {
  const value = useContext(PostContext);
  console.log(value);
  return value;
}

// Create custom hook that returns context value here
function CustomContext({ children }) {
  const [savedPosts, setSavedPosts] = useState([]);
  const [showSavedList, setShowSavedList] = useState(false);

  function onSave(post) {
    setSavedPosts([...savedPosts, post]);
  }

  function onReset(){
    setSavedPosts([]);
  }

  return (
    <PostContext.Provider
      value={{
        onSave,
        onReset,
        showSavedList,
        setShowSavedList,
        savedPosts,
        setSavedPosts,
        
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

// create a custom saved post provider here with add and reset functions
export { PostContext, CustomContext, useValue };
