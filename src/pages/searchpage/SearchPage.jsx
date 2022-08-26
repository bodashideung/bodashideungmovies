import React, { useContext } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MoviesContext } from "../../Context/moviesContext";
import Card from "../../components/card/Card";

function SearchResult() {
  const {searchResult, setSearchResult} = useContext(MoviesContext);
  const {search} = useLocation();
  const getQuery =  search.slice(7).split('%20').join(' ');
  
  useEffect(() => {
    async function searchMovies() {
      const response = await fetch(`
      https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${getQuery}&page=1`);
      const data = await response.json();
      setSearchResult(data.results);
    }
    searchMovies()
  }, [getQuery, setSearchResult])

  return (
    <main className="section search-container">
      <h1>search page</h1>
      <div className="search-results">
        {searchResult?.map((movie, id) => {
          return (
            <Card
            key={id}
            title={movie.media_type === "movie" ? movie.title: movie.name}
            img={movie.poster_path}
            media={movie.media_type}
            movieId={movie.id} />
          ) 
        })}
      </div>
    </main>
  );
}

export default SearchResult;
