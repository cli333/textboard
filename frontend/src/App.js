import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./components/Main/MainPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
