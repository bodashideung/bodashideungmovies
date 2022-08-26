import React, {useContext, useState, useEffect} from "react";
import Card from "../../../card/Card";
// import { MoviesContext } from "../../../../Context/moviesContext";
import {SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css'

function TrendingMovies() {
// const {trendingMovies} = useContext(MoviesContext);
// console.log(trendingMovies)

const [trendingMovies, setTrendingMovies] = useState([]);
const [isLoading, setIsLoading] = useState(true);

async function getTrendingMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
  );
  const data = await response.json();
  console.log(data)
  setTrendingMovies(data.results);
  setIsLoading(false);
}

useEffect(() => getTrendingMovies, [isLoading])

if (isLoading) {
  return (
    <div>
      loading...
    </div>
  )
}

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
