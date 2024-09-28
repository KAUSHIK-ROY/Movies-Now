import React from "react";
import "./error.css";
import gif from "./logo-pics/electrocuted-caveman-animation-404-error-page.gif";
import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <div className="error">
      <div className="info">
        <h1>OOPS!</h1>
        <h3>404 Error!!! Page not found...</h3>
      </div>
      <img src={gif} alt="" />
      <NavLink to={"/"}>
        <button>Go to Home page</button>
      </NavLink>
    </div>
  );
}
