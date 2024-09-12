import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import axios from "axios";
import Categories from "./Components/UI/Nav Components/Categories";
import Layout from "./Components/Layout";
import Watchlist from "./Components/UI/Nav Components/Watchlist";
import Account from "./Components/UI/Nav Components/Account";
import Movies_all from "./Components/UI/Nav Components/Movies_all";
import About_us from "./Components/UI/Nav Components/About_us";
import Error from "./Components/Error";
import DetailPage from "./Components/DetailPage";
import VideoPlay from "./Components/VideoPlay";


axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`;

const root = ReactDOM.createRoot(document.getElementById("root"));

const allRoutes = createBrowserRouter([
      {
        path: '/',
        element: <App/>,
      },
      {
        path: "categories",
        element: <Categories/>,
      },
      {
        path: "movies",
        element: <Movies_all/>,
      },
      {
        path: "watchlist",
        element: <Watchlist />,
      },
      {
        path: "about-us",
        element: <About_us />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path:'*',
        element:<Error/>
      },
      {
        path: ":detail/:id",
        element:<DetailPage/>
      },
      {
        path: ":type/:id/video",
        element:<VideoPlay/>
      }
]);

root.render(
  <React.StrictMode>
      <Provider store={store}>
    <RouterProvider router={allRoutes} />
    <BrowserRouter/>
        {/* <App /> */}
    {/* </BrowserRouter> */}
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
