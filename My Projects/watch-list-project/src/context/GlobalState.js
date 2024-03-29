import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

// create context
export const GlobalContext = createContext(); // react in bir ozelligi. Redux ile de yapilabilir ama bu uygulamayi createContext ile yapacagiz

const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
  ? JSON.parse(localStorage.getItem("watched"))
  : [],
};

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {// localStorage a kayit edilenleri sayfa yenilendiginde kayitlar gitmesin diye yaptik
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatchList = (id) => {
    dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id});
  }

  const addMovieToWatched = (movie) => {
    dispatch({type: "ADD_MOVIE_TO_WATCHED", payload: movie});
  }

  const moveToWatchlist = (movie) => {
    dispatch({type: "MOVE_TO_WATCHLIST", payload: movie})
  }

  const removeMovieFromWatched = (id) => {
    dispatch({type: "REMOVE_MOVIE_FROM_WATCHED", payload: id});
  }


  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        removeMovieFromWatchList,
        addMovieToWatched,
        moveToWatchlist,
        removeMovieFromWatched
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
