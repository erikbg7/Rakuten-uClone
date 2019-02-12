import React, { Component } from 'react';
import * as Movies from "../api/MoviesService";


class MovieDetail extends Component {
  state = {
    movieDetail: '',
    images: ''
  }

  componentDidMount() {
    Movies.getSpecificMovie(this.props.movie).then(res => this.setState({ movieDetail: res }));
    Movies.getMovieImage(this.props.movie).then(res => this.setState({ images: res }));
  }

  render() {
    return (
      <div className="movie-detail"
           style={{
             backgroundImage: `url(${this.state.images.snapshot})`,
             backgroundSize: "cover"
           }}>
        <div className="movie-detail-info">
          <h2>{this.state.movieDetail.title}</h2>
          <p>{this.state.movieDetail.plot}</p>
        </div>
        <div className="overlay"></div>
      </div>
    );
  }
}

export { MovieDetail };