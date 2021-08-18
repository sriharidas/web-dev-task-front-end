import "./styles/App.css";
import "./styles/main.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { IoMdVideocam } from "react-icons/io";
import SearchPersonContainer from "./components/search/person/SearchPersonContainer";
import HomePage from "./components/Movie/HomePage";
import Navbar from "./components/Navbar";
import SearchMovieContainer from "./components/search/movie/SearchMovieContainer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <HomePage props={HomePageData} />}
          />
          <Route
            exact
            path="/search"
            component={(props) => <SearchPersonContainer {...props} />}
          />
          <Route
            exact
            path="/movies"
            component={(props) => <SearchMovieContainer {...props} />}
          />
        </Switch>
      </div>
    </Router>
  );
}
const HomePageData = {
  slides: [
    {
      icon: <IoMdVideocam />,
      content: "Over 100k+ Movies and TV Series",
      link: "view",
    },
    {
      icon: <IoMdVideocam />,
      content: "High Quality videos",
      link: "get started",
    },
    {
      icon: <IoMdVideocam />,
      content: "10M+ active users",
      link: "Join us",
    },
  ],
  moviePosterData: [
    {
      property: "language",
      name: "English",
      id: "1",
      heading: "Popular Hollywood Movies",
    },
    {
      property: "language",
      name: "tamil",
      id: "2",
      heading: "Popular Tamil Movies",
    },
    {
      property: "language",
      name: "Hindi",
      id: "3",
      heading: "Popular Bollywood Movies",
    },
    {
      property: "genre",
      name: "action",
      id: "4",
      heading: "Popular Action Movies",
    },
    {
      property: "genre",
      name: "comedy",
      id: "5",
      heading: "Popular Comedy Movies",
    },
    {
      property: "genre",
      name: "Thriller",
      id: "6",
      heading: "Popular Thriller Movies",
    },
    {
      property: "genre",
      name: "sci-fi",
      id: "7",
      heading: "Popular Sci-Fi Movies",
    },
  ],
};

export default App;
