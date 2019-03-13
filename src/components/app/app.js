import { hot } from 'react-hot-loader/root';

import React, { Component } from 'react';

import Autocomplete from '../autocomplete';
import MovieCard from '../movieCard';

import './kayak-bootstrap/bootstrap.css';

import styles from './app.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: null
    };
  }

  handleSelect = movie => {
    this.setState({
      selectedMovie: movie
    });
  };

  render() {
    const { selectedMovie } = this.state;
    console.log(selectedMovie);
    return (
      <div className={styles.container}>
        <h4 className={styles.title}>Kayak UI Academy</h4>
        {selectedMovie ? (
          <MovieCard
            selectedMovie={selectedMovie}
            handleSelect={movie => this.handleSelect(movie)}
          />
        ) : (
          <Autocomplete
            handleSelect={movie => {
              this.handleSelect(movie);
            }}
          />
        )}
      </div>
    );
  }
}

export default hot(App);
