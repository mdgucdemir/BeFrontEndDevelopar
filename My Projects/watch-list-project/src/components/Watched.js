import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import MovieCard from './MovieCard';

const Watched = () => {

  const { watched } = useContext(GlobalContext);

  return (
    <div>
      <div className="movie-page">
        <div className="container">
          <div className="header">
            <h1 className="header">Watched List</h1>
            <div className="count-pill">
            {watched.length} {watched.length < 2 ? "Movie" : "Movies"}
          </div>
          </div>      
              
          {watched.length > 0 ? (
            <div className="movie-grid">
              {watched.map(movie => (
                <MovieCard movie={movie} key={movie.id} type='watched' />
              ))}
            </div>
          ) : (
            <h2 className='no-movies'>There is no film in your Watched List</h2>
          )}
        </div>
      </div>
    </div>
  )
}

export default Watched