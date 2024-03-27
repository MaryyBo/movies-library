import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';

class MovieCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      isFavorite: false
    }
  }

  render() {
    const { movie } = this.props;
    let button;
    const heartIconClass = this.props.isFavorite ? "fas fa-heart" : "far fa-heart";

    if (this.props.isFavorite) {
      button = <button onClick={() => this.props.favFunc(movie)}><FontAwesomeIcon icon={faTrash} /></button>
    } else {
      button = <button onClick={() => this.props.favFunc(movie)}><FontAwesomeIcon icon={faHeart} /></button>
    }

    return (
      <div className='card-wrapper'>
        <div className="cardImageWrap">
          <img
            className="movieImg"
            src={movie.Poster}
            alt={movie.Title} />
        </div>
        <div>
          <h1> Movie Name:</h1>
          <h2>{movie.Title}</h2>
          <p>Director: {movie.Director}</p>
          <p>Actors: {movie.Actors}</p>
          <p>Year: {movie.Year}</p>
          <p>Runtime: {movie.Runtime}</p>
          <p>Plot: {movie.Plot}</p>

          {/* Додайте кнопку "до вподобань" і вкажіть обробник подій */}
          {button}
        </div>
      </div>
    );
  }
}

export default MovieCard;

//<button onClick={() => this.props.favFunc(movie)}
//<button onClick={this.props.favFunc(movie)}