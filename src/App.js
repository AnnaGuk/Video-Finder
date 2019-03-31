import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import ShowsList from "./components/ShowsList/ShowsList";
import ShowDetails from "./components/ShowDetails/ShowDetails";

import data from "./data.json";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" render={() => <Redirect to="/dashboard" />} />

        <Route
          path="/dashboard"
          component={() => <ShowsList shows={data.shows} />}
        />

        <Route
          path="/details/:id"
          component={props => (
            <ShowDetails
              show={data.shows.find(
                show => show.imdbID === props.match.params.id
              )}
              {...props}
            />
          )}
        />
      </Router>
    );
  }
}

export default App;
