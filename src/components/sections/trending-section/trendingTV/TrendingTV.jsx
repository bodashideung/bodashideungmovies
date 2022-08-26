import React from "react";
import { MoviesContext } from "../../../../Context/moviesContext";
import Card from "../../../card/Card";
import { useContext } from "react";
import { SplideSlide } from "@splidejs/react-splide";

function TrendingTV() {
  const { trendingTV } = useContext(MoviesContext);

  return (
  <React.Fragment>
  {trendingTV?.map((movie) => {
        return (
          <SplideSlide key={movie.id}>
              <Card
                movieId={movie.id}
                media={movie.media_type}
                title={movie.name}
                img={movie.poster_path}
                typeClass="popular"
              />
          </SplideSlide>
        );
      })}
    </React.Fragment>
      
  );
}



export default TrendingTV;
