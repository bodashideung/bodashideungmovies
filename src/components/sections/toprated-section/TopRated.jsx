import Card from "../../card/Card";
import { useContext } from "react";
import { MoviesContext } from "../../../Context/moviesContext";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const TopRated = () => {
  const { topMovies } = useContext(MoviesContext);

  return (
    <SectionTopRated className="section top-rated-container">
      <div className="subtitle">
        <h2>Top Rated</h2>
      </div>
      <Splide
       options={{
        perPage: 5,
        height: '27rem',
        gap: '2rem',
        drag: 'free',
        pagination: false,
        breakpoints: {
          1024: {
            perPage: 4,
          },
          920: {
            perPage: 3,
            arrows: false
          },
          767: {
            perPage: 3,
            height: '22rem',
            arrows: false
          },
          560: {
            perPage: 2,
            height: '22rem',
            arrows: false
           },
          480: {
            perPage: 2,
            height: '18rem',
            arrows: false
           }
        }
      }}
      >
        {topMovies.map((movie) => {
          return (
            <SplideSlide
            key={movie.id}
            >
              <Card
                movieId={movie.id}
                media="movie"
                title={movie.title}
                img={movie.poster_path}
                typeClass="top-rated"
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </SectionTopRated>
  );
};

const SectionTopRated = styled.section`
  margin: 2rem 0 2rem 2.2rem;
`;

export default TopRated;
