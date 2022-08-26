import React, { useEffect, useContext } from "react";
import { MoviesContext } from "../../Context/moviesContext";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

export const Detailpages = () => {
  const { detail, setDetail } = useContext(MoviesContext);
  const { pathname } = useLocation();
  const location = pathname.slice(0, pathname.indexOf("-"));
  const media = location.match(/(movie|tv)/g).join("");
  const id = location.match(/[0-9]/g).join("");
  const isMovieOrTv = media === "movie";
  const moviesRuntime = `${Math.floor(detail.runtime / 60)}h ${
    detail.runtime % 60
  }m`;
  const episodeRuntime = `${Math.floor(detail.episode_run_time / 60)}h ${
    detail.episode_run_time % 60
  }m`;

  console.log(detail)

  useEffect(() => {
    async function getDetail(id, media) {
      const response = await fetch(
        `https://api.themoviedb.org/3/${media}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      const data = await response.json();
      setDetail(data);
    }
    getDetail(id, media);
  }, [id, media, setDetail]);

  return (
    <main>
      <DetailContainer>
        <Poster>
          <img
            src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
            alt={detail.name}
          />
        </Poster>
        <DetailContents>
          <HeadingContent>
            <h1>{isMovieOrTv ? detail.title : detail.name}</h1>
            <span>
              {isMovieOrTv ? detail.release_date : detail.first_air_date} &#9642;{" "}
              {isMovieOrTv ? moviesRuntime : episodeRuntime}
            </span>
          </HeadingContent>
          <Genres>
            {detail?.genres?.map((genre) => {
              return (
                <span className="shadow-to-left" key={genre.id}>
                  {genre.name}
                </span>
              );
            })}
          </Genres>
          <Overview>
            <h2>Overview</h2>
            <p>{detail.overview}</p>
          </Overview>
        <FooterContent>
          <span>Status: <strong>{detail.status}</strong></span>
          <span>Runtime: <strong>{isMovieOrTv ? moviesRuntime : episodeRuntime}</strong></span>
          <span>Ratings: <strong>{detail.vote_average}</strong></span>
        </FooterContent>
        </DetailContents>
      </DetailContainer>
      <div className="div">
        <img
          src={`https://image.tmdb.org/t/p/w500${detail.backdrop_path}`}
          alt="test"
        />
      </div>
    </main>
  );
};

const DetailContainer = styled.div`
  display: flex;
  border-bottom: 2px solid #151617;
  margin-bottom: 2rem;
`;

const Poster = styled.div`
  flex: 1 0 350px;
  display: grid;
  place-items: center;
  border-right: 2px solid #151617;

  img {
    width: 80%;
    object-fit: cover;
  }
`;

const DetailContents = styled.div`
  position: relative;
  padding: 1.5rem;
  flex: 1 0 850px;
`;

const HeadingContent = styled.div`
margin-bottom: 1rem;
  h1{
    font-size: 1.8rem;
    margin-bottom: 0.4rem;
    letter-spacing: 2px;
  }
  span {
    display: inline-block;
    color: #413f3d;
  }
`

const Overview = styled.div`
  width: 90%;

  h2 {
    color: #151617;
    margin-bottom: 0.8rem;
  }

  p {
    color: #413f3d;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: justify;
    text-justify: inter-word;
  }
`;

const Genres = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1.5rem;

  span {
    background: #6eb68c;
    color: white;
    padding: 0.3rem 0.6rem;
    font-size: 0.8rem;
    cursor: pointer;
    transition: 0.3s ease-in;

    :hover {
      background: #5287a1;
    }
  }
`;

const FooterContent = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 2px solid #151617;
  
  span{
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #413f3d;

    strong{
      color: #151617;
      font-weight: 500;
      margin-left: .5rem;
      font-size: 1.2rem;
    }
  }

  span:nth-child(2){
    border-right: 2px solid #151617;
    border-left: 2px solid #151617;
  }
`
