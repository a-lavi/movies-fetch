import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [movies, setMovies] = useState([])
  const [ searchWord, setSearchWord]= useState('destiny')
  const readMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b4fa904b6dd6ec161038cb628ce5ce65&language=en-US&query=${searchWord}&page=1&include_adult=false`
    )
    const result = await response.json()
    console.log(result)
    setMovies(() => result.results)
  }
  const moviesList = movies.map((movie, index) => {
    return (
      <li key={index}>
        <h3>{movie.title}</h3>
        <div>
          {movie.overview}
        </div>
      </li>
    )
  })
  return (
    <div>
      <h1>Movies</h1>
      <button onClick={readMovies}>Search</button>

      <div>
        <ul>
          {moviesList}
        </ul>
      </div>
    </div>
  );
}

export default App;
