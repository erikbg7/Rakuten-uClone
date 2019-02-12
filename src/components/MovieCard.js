import React from 'react';
import { Button } from './index';
import {Link} from "react-router-dom";


const MovieCard = ({ movie, favoriteList, onAddListPressed, img, score, votes}) => (
  <div className="movie-view">
    <div
    className="movie-card"
        style={{
          backgroundColor: '#202020',
          backgroundImage: `url(${img})`
        }}
      >
        <div className="movie-card-container">
          <div className="movie-card-text">
            <div className="movie-card-trailer">
              <Link to= {`/movie/${movie.id}`} >
                <Button type="play" icon="play" onButtonPressed={() => console.log('Play!')}>
                  Trailer
                </Button>
              </Link>
              <div className="movie-card-label-price">
                <span>VER AHORA</span> {movie.label}
              </div>
            </div>
          </div>
          <div className="movie-card-favorites-container">
            <Button
              buttonStyleOptions="round-button"
              iconStyleOptions="fa-fw"
              icon={favoriteList.filter(l => l.id === movie.id).length ? 'check' : 'plus'}
              onButtonPressed={() => onAddListPressed(movie)}
            />
          </div>
        </div>
      </div>
    <div className="movie-card-footer">
      <span className="score"><i className="fa fa-star">&nbsp; {score}</i></span>
      <span className="votes"><i className="fa fa-user">&nbsp; {votes}</i></span>
  </div>
  </div>
);

export { MovieCard };
