import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Info from "./pages/Info";
import Error404 from "./pages/404";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/region/:id" exact component={Info} />
          <Route path="*" component={Error404} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
