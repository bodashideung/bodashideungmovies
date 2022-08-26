import React, {useContext} from "react";
import Card from "../../../card/Card";
import { MoviesContext } from "../../../../Context/moviesContext";
import {SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css'

function TrendingMovies() {
const {trendingMovies} = useContext(MoviesContext);
console.log(trendingMovies)

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
