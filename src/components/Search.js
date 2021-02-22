import { useState } from 'react';
import axios from 'axios';
import randomNumber from '../../utils/randomNumber';
import Modal from './Modal';

const Search = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [name, setName] = useState(null);
  const [image, setImage] = useState(null);
  const [moves, setMoves] = useState([]);
  const [generateRandomNumber, setGenerateRandomNumber] = useState('');

  const changeHandler = (event) => {
    setSearch(event.target.value);
  };

  const showModal = () => {
    setOpen(!open);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${search}`
      );
      // setName(response.data.name);
      // setImage(response.data.sprites.front_default);
      // setMoves(response.data.moves.map((moves) => moves.move.name));
      // showModal();
    } catch (error) {
      console.error(error);
    }
  };

  const randomPokemon = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${generateRandomNumber}`
      );

      // setName(response.data.name);
      // setImage(response.data.sprites.front_default);
      // setMoves(response.data.moves.map((moves) => moves.move.name));
      // showModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form action='submit' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='search...'
          value={search}
          onChange={changeHandler}
        />
        <button type='submit'>search</button>
        <button type='button' onClick={randomPokemon}>
          random
        </button>
      </form>
    </>
  );
};

export default Search;
