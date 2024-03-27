import React from 'react';
import "./style.css"
import { getMovie } from './api';
import MovieCard from './components/movieCard';
import FavoriteMovies from './components/favoriteMovies';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [], // зберігати тут список фільмів\\
      searchString: '',
      favMovies: []
    }
  }

  handleAddToFavorites = (movie) => {
    // Оновлюємо стан компонента, додаючи об'єкт фільму до списку вподобань
    this.setState(prevState => ({
      favMovies: [...prevState.favMovies, movie],
      movies: prevState.movies.filter(item => item.Title !== movie.Title) // Видаляємо фільм зі списку фільмів
    }));
  }

  submitHandler = (event) => {
    event.preventDefault();
    const name = event.target[0].value.trim();

    if (name === '') { //перевірка на пустий інтпут і рендерінг пустої верстки
      return; //вийти з функції, якщо input порожній
    }

    getMovie(name)
      .then((response) => {
        this.setState(prevState => ({
          movies: [...prevState.movies, response] // Додавання нового фільму до масиву фільмів
        }));
        // todo clean input value
      })
      .catch(error => {
        console.warn('Error fetching data:', error);
      });
  }

  showFavorites = () => {

    console.log(this.state.favMovies)
    if (this.state.favMovies.length > 0) {
      console.log('render fav');
      return <FavoriteMovies movies={this.state.favMovies} />
    }
  }

  render() {
    return (
      <React.Fragment>
        <section>
          <h1>Movie Library</h1>
          <div className="wrapper">
            <form onSubmit={this.submitHandler} className='form'>
              <label>Movie Name
                <input className="input" />
              </label>
              <label>Year
                <input />
              </label>
              <button>Search</button>
            </form>
          </div>
          <div>
            <button onClick={this.showFavorites}>Show favourites</button>
          </div>
        </section>

        {this.showFavorites()}

        <div className='searth-results'>
          <h2>Search results:</h2>
          <section className='cards-list-wrapper'>
            {this.state.movies.map((movie, index) => (
              <MovieCard key={index} movie={movie} favFunc={this.handleAddToFavorites} isFavorite={false} />
            ))}
          </section>
        </div>

      </React.Fragment>
    );
  };
}

export default App;


//{this.state.searchResults !== false && <MovieCard movie={this.state.searchResults} />} - якщо searchResults НЕ false (не пустий),тоді рендеримо картку