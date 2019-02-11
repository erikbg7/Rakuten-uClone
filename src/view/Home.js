import React from 'react';
import { MovieCard, Jumbotron, Carousel } from '../components';
import {Footer} from "../components/Footer";





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

    <Carousel title="Especial premios Goya">
      {movies.awardedMovies.map(movie => (
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
    <Footer/>

  </div>
);

export default Home;
