import React, { Component } from 'react';
import MovieCard from './movieCard';

class FavoriteMovies extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            movies: [],
        }
      }
      
      render() {
        return (
            <div className="fav-wrapper">
                <h2>Favourite movies</h2>
                <div className='fav-movies'>
                    {this.props.movies && this.props.movies.map((movie, index) => (
                        <MovieCard key={index} movie={movie} isFavorite={true} />
                    ))}
                </div>
            </div>
        );
    }
}

export default FavoriteMovies;
