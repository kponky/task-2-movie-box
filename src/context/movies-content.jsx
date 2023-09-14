import { createContext, useState, useEffect } from "react";

export const MovieContext = createContext({
    movies: [],
    setMovies: () => [],
})

// eslint-disable-next-line react/prop-types
export const MovieProvider =  ({ children }) => {
    const [movies, setMovies] = useState([]);
    const value = { movies, setMovies};


    useEffect(()=>{
        const apiKey = '3ae45bc50e65b3c6ea15cca0aa5f3e1e';
      
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
        .then(
          (response) => response.json()
        )
        .then(
          (movies) => setMovies(movies.results)
        );
      }, []);

    return(
        <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
    )
}