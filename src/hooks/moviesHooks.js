import { useState, useEffect } from "react";


export const useTrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  async function getTrendingMovies() {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    setTrendingMovies(data.results);
  }

  useEffect(() => getTrendingMovies, [])

  return {trendingMovies}
};


export const useTrendingTV = () => {
    const [trendingTV, setTrendingTV] = useState([]);

    async function getTrendingTV() {
        const response = await fetch(
            `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}`
        )

        const data = await response.json();

        setTrendingTV(data.results);
    }

    useEffect(() => getTrendingTV, [])

    return {trendingTV}
}

export const useTopMovies = () => {
    const [topMovies, setTopMovies] = useState([]);
    
    async function getTopMovies() {
        const response = await fetch(
            `
            https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
            );
            const data = await response.json();
            setTopMovies(data.results);
        }
        
        useEffect(() => getTopMovies, []);

    return {topMovies}
}