import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import io from "socket.io-client";
import Provider from "./context/Provider";
import MainPage from "./components/Main/MainPage";
import Header from "./components/Header/Header";
import TopicPage from "./components/TopicPage/TopicPage";

let socket;

function App() {
  socket = io("http://localhost:5000/");
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

export { socket };
export default App;
