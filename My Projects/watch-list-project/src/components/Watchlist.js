import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import MovieCard from './MovieCard';

const Watchlist = () => {

  const { watchlist } = useContext(GlobalContext);

  return (
    <div>
      <div className="movie-page">
        <div className="container">
          <div className="header">
            <h1 className="header">Watch List</h1>
            <div className="count-pill">
            {watchlist.length} {watchlist.length < 2 ? "Movie" : "Movies"}
          </div>
          </div>         

          {watchlist.length > 0 ? (
            <div className="movie-grid">
              {watchlist.map(movie => (
                <MovieCard movie={movie} key={movie.id} type='watchlist' />
              ))}
            </div>
          ): (
            <h2 className='no-movies'>There is no film in your Watch List</h2>
          )}
        </div>
      </div>
    </div>
  )
}

export default Watchlist