import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./sass/main.scss";
import Brand from "./components/Brand";
import Details from "./components/Details";
import Exchange from "./components/Exchange";
import Home from "./components/Home";
import Rent from "./components/Rent";
import Sale from "./components/Sale";
import Profile from "./components/Profile/profile.jsx"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/brand" component={Brand} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/exchange" component={Exchange} />
        <Route exact path="/rent" component={Rent} />
        <Route exact path="/sale" component={Sale} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
