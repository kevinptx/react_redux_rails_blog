import React, { Fragment } from "react";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import FetchBlogs from "./components/FetchBlogs";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blogs" component={FetchBlogs} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;

//you only need component if you're calling.
