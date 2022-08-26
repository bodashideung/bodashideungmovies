import { MoviesContext } from "../../../Context/moviesContext";
import { useContext } from "react";
import TrendingMovies from "./trendingMovies/TrendingMovies";
import TrendingTV from "./trendingTV/TrendingTV";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styled from "styled-components";

const Trending = () => {
  const { chooseMovies, chooseTV, media } = useContext(MoviesContext);

  return (
    <SectionTrending>
      <div className="subtitle">
        <h2>Weekly Trending</h2>
        <button data-media="tv" onClick={(e) => chooseTV(e)}>
          tv
        </button>
        <button data-media="movie" onClick={(e) => chooseMovies(e)}>
          movies
        </button>
      </div>
      <Splide
        options={{
          perPage: 5,
          height: '27rem',
          gap: "2rem",
          drag: 'free',
          pagination: false,
          breakpoints: {
            1024: {
              perPage: 4,
              arrows: false,
            },
            920: {
              perPage: 3,
              arrows: false,
            },
            767: {
              perPage: 3,
              arrows: false,
              height:'22rem'
            },
            560: {
              arrows: false,
              perPage: 2,
              height:'22rem',
             },
            480: {
              arrows: false,
              perPage: 2,
              height:'18rem',
             }
          }
        }}
      >
        {media.media !== "tv" ? <TrendingMovies /> : <TrendingTV />}
      </Splide>
    </SectionTrending>
  );
};

const SectionTrending = styled.section`
  margin: 2rem 0 2rem 2.2rem;
`

export default Trending;
