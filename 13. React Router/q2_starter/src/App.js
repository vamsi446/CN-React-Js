import "./styles.css";
// import necessary components here
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, Route
} from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { Contact } from "./pages/Contact";

export default function App() {
  // debug the code below to create predefined route
  const routes = createRoutesFromElements(
    // { path: "/", element: <Home /> },
    // { path: "/list", element: <List /> },
    // { path: "/contact", element: <Contact /> }

    <>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/list" element={<List></List>}></Route>
    <Route path="/contact" element={<Contact></Contact>}></Route>
    </>
  );

  const router = createBrowserRouter(routes);

  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}
