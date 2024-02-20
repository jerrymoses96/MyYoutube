import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Store from "./Utils/Store";
import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>,
      },
      {
        path:"/watch",
        element:<WatchPage/>,
      },
    ]
  },
]);

function App() {
  return (
    <Provider store={Store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
