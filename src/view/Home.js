import React from 'react';
import { MovieCard, Jumbotron, Carousel } from '../components';


const Home = ({ favoriteList, onAddListPressed, movies }) => (
  <div className="home-container">
    <Jumbotron/>
    <Carousel title="Estrenos imprescindibles en TAQUILLA">
      {movies.lastestMovies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          favoriteList={favoriteList}
          onAddListPressed={movie => onAddListPressed(movie)}
          img={movie.images.artwork}
          score={movie.highlighted_score.score}
          votes={movie.highlighted_score.amount_of_votes}
        />
      ))}
    </Carousel>

    <Carousel title="Películas más vistas en Alquiler">
      {movies.viewedMovies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          favoriteList={favoriteList}
          onAddListPressed={movie => onAddListPressed(movie)}
          img={movie.images.artwork}
          score={movie.highlighted_score.score}
          votes={movie.highlighted_score.amount_of_votes}
        />
      ))}
    </Carousel>

    <Carousel title="Pelis infantiles para ver una y otra vez">
      {movies.kidMovies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          favoriteList={favoriteList}
          onAddListPressed={movie => onAddListPressed(movie)}
          img={movie.images.artwork}
          score={movie.highlighted_score.score}
          votes={movie.highlighted_score.amount_of_votes}
        />
      ))}
    </Carousel>

    <Carousel title="Películas populares en Compra">
      {movies.popularbuyMovies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          favoriteList={favoriteList}
          onAddListPressed={movie => onAddListPressed(movie)}
          img={movie.images.artwork}
          score={movie.highlighted_score.score}
          votes={movie.highlighted_score.amount_of_votes}
        />
      ))}
    </Carousel>

    <Carousel title="Si te perdiste...">
      {movies.otherMovies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          favoriteList={favoriteList}
          onAddListPressed={movie => onAddListPressed(movie)}
          img={movie.images.artwork}
          score={movie.highlighted_score.score}
          votes={movie.highlighted_score.amount_of_votes}
        />
      ))}
    </Carousel>
  </div>
);

export default Home;
