import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTrendingMovies, useTrendingTV, useTopMovies } from "../hooks/moviesHooks";

export const MoviesContext = createContext();

export function MoviesProvider(props) {
  const [input, setInput] = useState("");
  // const {trendingMovies} = useTrendingMovies();
  const {trendingTV} = useTrendingTV();
  const {topMovies} = useTopMovies();
  const [searchResult, setSearchResult] = useState([]);
  const [media, setMedia] = useState({ media: "movie" });
  const [detail, setDetail] = useState({});
  const { pathname } = useLocation();

  const [trendingMovies, setTrendingMovies] = useState([]);

  async function getTrendingMovies() {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    console.log(data)
    setTrendingMovies(data.results);
  }

  useEffect(() => getTrendingMovies, [])

  console.log(trendingMovies)

  useEffect(() => toTop, [pathname]);


  function chooseTV(event) {
    const value = event.target.dataset.media;
    setMedia({ media: value });
  }

  function chooseMovies(event) {
    const value = event.target.dataset.media;
    setMedia({ media: value });
  }

  function toTop() {
    window.scrollTo(0, 0);
  }

  return (
    <MoviesContext.Provider
      value={{
        trendingMovies,
        trendingTV,
        topMovies,
        searchResult,
        setSearchResult,
        media,
        setMedia,
        input,
        setInput,
        chooseTV,
        chooseMovies,
        detail,
        setDetail,
        toTop,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
}
