import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MasterPage from "./components/MasterPage/MasterPage";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contacts/Contacts";
import NotFound from "./components/NotFound/NotFound";
import Portfolio from "./components/Portfolio/Portfolio";

const router = createBrowserRouter([
  {
    path: "", element: <MasterPage />, children: [
      { path: "", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contacts", element: <Contact /> },
      {path: "*", element: <NotFound />}
      
  ]}
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
