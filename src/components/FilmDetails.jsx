import React from "react";
import { Paper } from "@material-ui/core";
import c3po from "../images/c3po.svg"
import vader from "../images/vader.png"

const FilmDetails = (props) => {
  return (
    <>
      <Paper className="paper details">
        <h2>Details</h2>
        {props.index >=0 && <>
        <div className="button_div">
            <button onClick={()=>props.handleFavorite(props.index)} className="c3po"><img alt="c3po" src={c3po}/></button>
            {props.favorites.includes(props.index) && <>
                <button onClick={()=>props.removeFavorite(props.index)} className="vader"><img alt="vader" src={vader}/></button>
            </>}
            </div>  
        <h3>{props.movies[props.index].title}</h3>
        <p>{props.movies[props.index].opening_crawl}</p>
        </>}
      </Paper>
    </>
  );
};

export default FilmDetails;
