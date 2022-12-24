import React, { useState } from 'react';

import { Button, Form, Input } from './Movies.styled';
import { BsSearch } from 'react-icons/bs';

import { FindedMovies } from 'components/FindedMovies';

export const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState(() => '');
  const [findedMovies, setFindedMovies] = useState([]);
  const [error, setError] = useState(null);
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '00f2cafab9ed8b61ede4a54c54838e2c';

  const handleInputChangeName = event => {
    const { value } = event.currentTarget;
    setSearchedMovies(value.trim().toLowerCase());
  };

  const handleSubmit = event => {
    const form = event.currentTarget;
    event.preventDefault();
    if (searchedMovies === '') {
      return;
    }

    fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchedMovies}`)
      .then(responce => {
        if (responce.ok) {
          return responce.json();
        }

        return Promise.reject(new Error('Something has gone wrong!'));
      })
      .catch(error => setError({ error }))
      .then(data =>
        data.results.length !== 0
          ? setFindedMovies(data.results)
          : alert('No movies found')
      );
    form.reset();
    reset();
  };

  const reset = () => {
    setSearchedMovies('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleInputChangeName}
        ></Input>
        <Button type="submit">
          <BsSearch />
        </Button>
      </Form>
      {findedMovies.length !== 0 && (
        <FindedMovies findedMovies={findedMovies} />
      )}
    </>
  );
};
