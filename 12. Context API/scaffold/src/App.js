import "./styles.css";
import { Navbar } from "./Navbar";
import { List } from "./List";
import { CustomContext } from "./postContext";

export default function App() {
  return (
    //Add the Context provider here
    <CustomContext>
    <div className="App">
      <Navbar />
      <List />
    </div>
    </CustomContext>
  );
}
