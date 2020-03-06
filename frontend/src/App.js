import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Provider from "./context/Provider";
import MainPage from "./components/Main/MainPage";
import Header from "./components/Header/Header";
import TopicPage from "./components/TopicPage/TopicPage";

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route patch="/topic/:topic" component={TopicPage} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
