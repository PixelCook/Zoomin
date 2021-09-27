import React from "react";
import { Paper } from "@material-ui/core";

const TableofContents = (props) => {
  return (
    <>
      <Paper className="paper toc">
        <h2>Titles</h2>
        {props.movies.map((movie, index) => (
          <div onClick={() => props.handleDetail(index)} key={movie.title} className="title_list">
            {props.favorites.map((favorite) => (favorite === index) && <h4 key={favorite} className="favorite">FAVORITE</h4>)}
            <h3>{movie.title}</h3>
          </div>
        ))}
      </Paper>
    </>
  );
};

export default TableofContents;
