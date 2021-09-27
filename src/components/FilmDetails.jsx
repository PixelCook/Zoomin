import React from "react";
import { Paper } from "@material-ui/core";
import c3po from "../images/c3po.svg";
import vader from "../images/vader.png";

const FilmDetails = (props) => {
  return (
    <>
      <Paper className="paper details">
        <h2>Details</h2>
        {props.index >= 0 && (
          <>
            <div>
              <div
                className="button_div"
                onClick={() => props.handleFavorite(props.index)}
              >
                <button className="c3po">
                  <img alt="c3po" src={c3po} />
                </button>
                <h4 className="c3po">Favorite</h4>
              </div>
              {props.favorites.includes(props.index) && (
                <>
                  <div
                    className="button_div"
                    onClick={() => props.removeFavorite(props.index)}
                  >
                    <button className="vader">
                      <img alt="vader" src={vader} />
                    </button>
                    <h4 className="vader">Remove</h4>
                  </div>
                </>
              )}
            </div>
            <h3>{props.movies[props.index].title}</h3>
            <p>{props.movies[props.index].opening_crawl}</p>
          </>
        )}
      </Paper>
    </>
  );
};

export default FilmDetails;
