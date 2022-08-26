import React from "react";
import Trending from "../../components/sections/trending-section/Trending";
import TopRated from "../../components/sections/toprated-section/TopRated";

function Home() {

  return (
    <main>
      <div className="hero-section">
        <h1>Discover your movies</h1>
      </div>
      <Trending/>
      <TopRated/>
    </main>
  );
}

export default Home;
