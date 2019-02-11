import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { NavBar } from './components';
import Home from './view/Home';
import ListMovies from './view/ListMovies';
import * as Movies from './api/Movies';

import './App.css'

class RakutenCloneApp extends React.Component {
  state = {
    movies: {
      lastestMovies: [],
      viewedMovies: [],
      kidMovies: [],
      popularbuyMovies: [],
      awardedMovies: []
    },
    favoriteList: [],
    fetchedMovies: [],
    isInputClosed: true,
  }

  componentDidMount() {
    Movies.getInTheater().then(res => this.setState({ movies: { ...this.state.movies, lastestMovies: res } }));
    Movies.getMostViewed().then(res => this.setState({ movies: { ...this.state.movies, viewedMovies: res } }));
    Movies.getForKids().then(res => this.setState({ movies: { ...this.state.movies, kidMovies: res } }));
    Movies.getMostPopular().then(res => this.setState({ movies: { ...this.state.movies, popularbuyMovies: res } }));
    Movies.getAwarded().then(res => this.setState({ movies: { ...this.state.movies, awardedMovies: res } }));


  }

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

  doSearch = query => {
    Movies.search(query).then(res => this.setState({ fetchedMovies: res }));
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
          : <ListMovies
              title="My List"
              movies={this.state.favoriteList}
              favoriteList={this.state.favoriteList}
              onAddListPressed={movie => this.toggleMovieInFavoriteList(movie)}
            />
        )} />
        <Route path='/search' render={() => (
          <ListMovies
            title="Resultados de la búsqueda"
            movies={this.state.fetchedMovies}
            favoriteList={this.state.favoriteList}
            onAddListPressed={movie => this.toggleMovieInFavoriteList(movie)}
          />
        )} />
        <Route path='/movie/:movieID' render={() => (
          !this.state.isInputClosed && this.state.fetchedMovies.length
            ? <Redirect to="/" />
            : <Home
              movies={this.state.movies}
              movieJumbotron={this.state.movieJumbotron}



              favoriteList={this.state.favoriteList}
              onAddListPressed={movie => this.toggleMovieInFavoriteList(movie)}
            />
        )} />
      </div>
    )
  }
}
export default RakutenCloneApp;
