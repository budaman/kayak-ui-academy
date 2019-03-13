import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const MovieCard = ({ handleSelect, selectedMovie }) => {
  return (
    <div className={styles.container}>
      <span className={styles.exit} onClick={() => handleSelect(null)}>
        X
      </span>
      <h1>{selectedMovie.title}</h1>
      <img
        className={styles.poster}
        src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
        alt={selectedMovie.original_title}
      />
      <p className={styles.overview}>{selectedMovie.overview}</p>
    </div>
  );
};

MovieCard.propTypes = {
  handleSelect: PropTypes.func.isRequired,
  selectedMovie: PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired
};

export default MovieCard;
