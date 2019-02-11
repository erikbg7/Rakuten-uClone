import React from 'react';
import { Button } from './index';
import {Link} from "react-router-dom";

const imageUrl = 'https://image.tmdb.org/t/p/';
const size = 'w500';
const TRUNCATE_LENGTH = 100;


const image = 'https://images-0.wuaki.tv/system/artworks/78800/master/cold-war-1548923090.jpeg';
const imageUrl2 = 'https://images-0.wuaki.tv/system/artworks/';
const proxyurl = "https://cors-anywhere.herokuapp.com/";


const MovieCard = ({ movie, favoriteList, onAddListPressed, img, score, votes, path, changeMenuMarker, page }) => (
  <div className="movie-view">
    <Link to= {`/movie/${movie.id}`} >
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
              <Button type="play" icon="play" onButtonPressed={() => console.log('Play!')}>
                Trailer
              </Button>
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
    </Link>

    <div className="movie-card-footer">
      <span className="score"><i className="fa fa-star">&nbsp; {score}</i></span>
      <span className="votes"><i className="fa fa-user">&nbsp; {votes}</i></span>
  </div>
  </div>
);

export { MovieCard };
