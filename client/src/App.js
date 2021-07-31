import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      {/* <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentariesMovies} /> */}
      <Row title="Drama" fetchUrl={requests.fetchDramaMovies} />
      <Row title="Adventure" fetchUrl={requests.fetchAdventureMovies} />
      <Row title="Animation" fetchUrl={requests.fetchAnimationMovies} />
      <Row title="Crime" fetchUrl={requests.fetchCrimeMovies} />
      <Row title="Family" fetchUrl={requests.fetchFamilyMovies} />
      <Row title="History" fetchUrl={requests.fetchHistoryMovies} />
      <Row title="Music" fetchUrl={requests.fetchMusicMovies} />
      <Row title="Mystery" fetchUrl={requests.fetchMysteryMovies} />
      <Row title="War" fetchUrl={requests.fetchWarMovies} />
      <Row title="Fantasy" fetchUrl={requests.fetchFantasyMovies} />
    </div>
  );
}

export default App;
