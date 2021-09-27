import "./App.css";
import React, { useState } from "react";
import fetchData from "./functions/fetch";
import { useEffect } from "react";
import { Grid } from "@material-ui/core";
import TableofContents from "./components/TableofContents";
import FilmDetails from "./components/FilmDetails";
import { useCookies } from "react-cookie";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(-1);
  const [cookies, setCookie] = useCookies(['favorites']);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchData("https://swapi.dev/api/films").then((response) => {
      setLoading(false);
      setMovies(response.data.results);
    });
    if (cookies.favorites){
      setFavorites(cookies.favorites)
    }else{
      setCookie('favorites', [])
    }
  }, []);

  useEffect(() => {
    handleCookie()
  }, [favorites])

  const handleDetail = (i) => {
    setIndex(i)
  }

  const handleFavorite = (i) => {
    if(favorites.includes(i)){
      return
    }
    setFavorites([...favorites, i]) 
  }

  const removeFavorite = (i) => {
    if(favorites.includes(i)){
      setFavorites(favorites.filter((index)=>{
        return index !== i
      }))
    } 
  }

  const handleCookie = () => {
    setCookie('favorites', favorites)
  }

  return (
    <>
      <div className="main_div">
        <h1>In a galaxy far far away...</h1>
        {loading && <h1>LOADING</h1>}
        {!loading && (
          <div className="content">
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TableofContents favorites={favorites} movies={movies} handleDetail={handleDetail} />
              </Grid>
              <Grid item xs={8}>
                <FilmDetails favorites={favorites} handleFavorite={handleFavorite} removeFavorite={removeFavorite} movies={movies} index={index} />
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
