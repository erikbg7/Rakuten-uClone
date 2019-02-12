import React from 'react';
import { MovieCard } from '../components';

const MoviesList = ({ movies, favoriteList, title, onAddListPressed }) => (
  <div className="movie-list-container">
    <h1>{title}</h1>
    <ol className="movie-list-grid">
      {movies.map(movie => (
        <li key={movie.id}>
          <MovieCard
            movie={movie}
            favoriteList={favoriteList}
            onAddListPressed={movie => onAddListPressed(movie)}
            img={movie.images.artwork}
            score={movie.highlighted_score.score}
            votes={movie.highlighted_score.amount_of_votes}
          />
        </li>
      ))}
    </ol>
  </div>
);

export default MoviesList;
