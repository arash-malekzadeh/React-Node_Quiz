import "../styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main";
import Quiz from "./Quiz";
import Result from "./Result";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main>root Element</Main>,
  },
  {
    path: "/quiz",
    element: <Quiz>quiz component</Quiz>,
  },
  {
    path: "/result",
    element: <Result>result component</Result>,
  },
]);
function App() {
  return <RouterProvider router={Router} />;
}

export default App;
