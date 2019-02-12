import React from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import {Footer, NavBar} from './components';
import Home from './view/Home';
import MoviesList from './view/MoviesList';
import * as MoviesService from './api/MoviesService';

import './styles/App.css';
import './styles/Footer.css';
import './styles/Home.css';
import './styles/NavBar.css';
import './styles/MovieDetail.css';




import {MovieDetail} from "./view/MovieDetail";

class RakutenCloneApp extends React.Component {
  state = {
    movies: {
      lastestMovies: [],
      viewedMovies: [],
      kidMovies: [],
      popularbuyMovies: [],
      otherMovies: []
    },
    favoriteList: [],
    fetchedMovies: [],
    isInputClosed: true,
  }

  componentDidMount() {
    MoviesService.getInTheater().then(res => this.setState({ movies: { ...this.state.movies, lastestMovies: res } }));
    MoviesService.getMostViewed().then(res => this.setState({ movies: { ...this.state.movies, viewedMovies: res } }));
    MoviesService.getForKids().then(res => this.setState({ movies: { ...this.state.movies, kidMovies: res } }));
    MoviesService.getMostPopular().then(res => this.setState({ movies: { ...this.state.movies, popularbuyMovies: res } }));
    MoviesService.getAwarded().then(res => this.setState({ movies: { ...this.state.movies, otherMovies: res } }));
  }

  //Sirve para añadir films a la lista de favoritos
  toggleMovieInFavoriteList = movie => {
    const { favoriteList } = this.state;
    let index = favoriteList.map(l => l.id).indexOf(movie.id);

    if (index === -1) {
      this.setState({ favoriteList: [...favoriteList, movie] });
    } else {
      this.setState({ favoriteList: [
        ...favoriteList.slice(0, index),
        ...favoriteList.slice(index + 1)
      ]});
    }
  }

  //Sirve para hacer la búsqueda de films en la API
  doSearch = query => {
    MoviesService.search(query).then(res => this.setState({ fetchedMovies: res }));
  }


  render() {
    return (
      <div className="app">
        <NavBar
          onSearchMovies={query => this.doSearch(query)}
          onCollapseInputHandler={() => this.setState({ isInputClosed: true })}
          onExpandInputHandler={() => this.setState({ isInputClosed: false })}
        />
        <Route exact path='/' render={() => (
          !this.state.isInputClosed && this.state.fetchedMovies.length
          ? <Redirect to="/search" />
          : <Home
              movies={this.state.movies}
              favoriteList={this.state.favoriteList}
              onAddListPressed={movie => this.toggleMovieInFavoriteList(movie)}

            />
        )} />
        <Route exact path='/favorites' render={() => (
          !this.state.isInputClosed && this.state.fetchedMovies.length
          ? <Redirect to="/search" />
          : <MoviesList
              title="Tus favoritos:"
              movies={this.state.favoriteList}
              favoriteList={this.state.favoriteList}
              onAddListPressed={movie => this.toggleMovieInFavoriteList(movie)}
            />
        )} />
        <Route path='/search' render={() => (
          <MoviesList
            title="Resultados de la búsqueda"
            movies={this.state.fetchedMovies}
            favoriteList={this.state.favoriteList}
            onAddListPressed={movie => this.toggleMovieInFavoriteList(movie)}
          />
        )} />
        <Route path='/movie/:movieID' component={Child}/>
        <Footer/>
      </div>
    )
  }
}

// Sirve para acceder al parámetro de Route -> /movie/:movieID
// y cargar la información.
const Child = ({ match }) => (
  <div>
    <MovieDetail movie={match.params.movieID}
    />
  </div>
);


export default RakutenCloneApp;
