import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import Navbar from "./components/Navbar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar></Navbar>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/about", element: <About></About> },
        { path: "/items", element: <Items></Items> },
      ],
    },
  ]);

  // const routes = createRoutesFromElements(
  //   <>
  //   <Route path="/" element={<Home />}></Route>
  //   <Route path="/about" element={<About />}></Route>
  //   <Route path="/items" element={<Items />}></Route>
  //   </>
  // );

  //const router = createBrowserRouter(routes);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
