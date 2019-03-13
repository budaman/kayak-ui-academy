import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

import { getMovies, getGenres } from '../../services/movieDB';

class Autocomplete extends PureComponent {
  constructor() {
    super();
    this.state = {
      results: [],
      genres: []
    };
  }

  componentDidMount() {
    getGenres()
      .then(response => response.json())
      .then(({ genres }) => this.setState({ genres }));
  }

  handleSearch = e => {
    if (e.target.value.length < 3) {
      this.setState({ results: [] });
      return null;
    }
    getMovies(e.target.value)
      .then(response => response.json())
      .then(({ results }) => this.setState({ results: results.slice(0, 8) }));
  };

  renderGenres = ids => {
    const { genres } = this.state;
    const matchedGenres = ids.reduce((res, id) => {
      const matchedGenre = genres.find(genre => genre.id === id);
      if (matchedGenre) {
        res.push(matchedGenre);
      }
      return res;
    }, []);
    return matchedGenres.map(genre => {
      return (
        <p key={genre.name} className={styles.genre}>
          {genre.name}
        </p>
      );
    });
  };

  renderAutocomplete = () => {
    const { results } = this.state;
    const { handleSelect } = this.props;
    return results.map(movie => {
      return (
        <div
          key={movie.id}
          className={styles.autocompleteCard}
          onClick={() => {
            handleSelect(movie);
          }}
        >
          <img
            className={styles.poster}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.original_title}
          />
          <div className={styles.movieContent}>
            <p>{`${movie.original_title} (${movie.release_date})`}</p>
            <div className={styles.genres}>{this.renderGenres(movie.genre_ids)}</div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <input onChange={this.handleSearch} />
        <div>{this.renderAutocomplete()}</div>
      </div>
    );
  }
}

Autocomplete.propTypes = {
  handleSelect: PropTypes.func.isRequired
};

export default Autocomplete;
