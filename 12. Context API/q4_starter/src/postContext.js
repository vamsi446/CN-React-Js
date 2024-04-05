import { useState, useContext, createContext } from "react";

const postContext = createContext();

export const usePostsValue = () => {
  const value = useContext(postContext);
  return value;
};

export const PostContextProvider = ({ children }) => {
  const [savedPosts, setSavedPosts] = useState([]);

  const resetPosts = () => setSavedPosts([]);

  const savePost = (post) => {
    const isSaved = savedPosts.find((p) =>{p.id === post.id});
    if (isSaved) {
      return alert("Post is already saved.");
    }
    setSavedPosts((prev) => [post, ...prev]);
  };

  const onDelete = (post) => {
    const index = savedPosts.findIndex((p) => {
      console.log(p,post);
      return p.id == post.id;
    });
    console.log(index);
    if (index !== -1) {
      const updatedPosts = savedPosts.filter((_, i) => i !== index);
      setSavedPosts(updatedPosts);
    }
  };

  // create a function to unsave post here

  return (
    <postContext.Provider
      value={{ savedPosts, setSavedPosts, resetPosts, savePost, onDelete }}
    >
      {children}
    </postContext.Provider>
  );
};
