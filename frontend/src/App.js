import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./components/Main/MainPage";
import Header from "./components/Header/Header";
import TopicPage from "./components/TopicPage/TopicPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route patch="/topic/:topic" component={TopicPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
