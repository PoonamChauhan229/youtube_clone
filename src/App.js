import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utilis/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import LoginDisplay from "./components/LoginDisplay";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path: "/auth",
        element: <LoginDisplay/>,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
