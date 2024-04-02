import { useValue } from "./postContext";

export const Navbar = () => {
  // remove this and get the value from context

  const value = useValue();
  console.log("nav bar",value);
  return (
    <div className="navbar">
      <span onClick={() => value.setShowSavedList(!value.showSavedList)}>
        Saved Posts: {/* show length of saved posts here */
            value.savedPosts.length}
      </span>
      {value.showSavedList && (
        <div className="saved-list">
          {value.savedPosts.map((p) => (
            <div className="saved-post" key={p.id}>
              <h3>{p.text}</h3>
              <img src={p.img} alt={p.text} />
            </div>
          ))}
        </div>
      )}
      {/* Add onClick functionality for the reset button */}
      <button onClick={value.onReset}>Reset</button>
    </div>
  );
};
