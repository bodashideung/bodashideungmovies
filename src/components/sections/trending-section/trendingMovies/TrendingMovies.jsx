import React, {useContext, useState, useEffect} from "react";
import Card from "../../../card/Card";
// import { MoviesContext } from "../../../../Context/moviesContext";
import {SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css'

function TrendingMovies() {
// const {trendingMovies} = useContext(MoviesContext);
// console.log(trendingMovies)

const [trendingMovies, setTrendingMovies] = useState([]);

async function getTrendingMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
  );
  const data = await response.json();
  setTrendingMovies(data.results);
}

useEffect(() => getTrendingMovies, [])

  return (
    <React.Fragment>
      {trendingMovies?.map((movie) => {
        return (
          <SplideSlide
           key={movie.id}
           options={{
            height: '28rem',
           }}
           >
              <Card
                movieId={movie.id}
                media={movie.media_type}
                title={movie.title}
                img={movie.poster_path}
                typeClass="popular"
              />
          </SplideSlide>
        );
      })}
    </React.Fragment>
  );
}

export default TrendingMovies;
