import React, { Component } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Launches from "./components/Launches";
import Launch from './components/Launch';
import "./App.css";
import logo from "./logo.png";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div className="container">
            <img
              src={logo}
              alt="SpaceX"
              style={{ width: 300, display: "block", margin: "auto" }}
            />

            <Routes>
              <Route exact path="/" element={<Launches />} />
              <Route exact path="/launch/:flight_number" element={<Launch/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
