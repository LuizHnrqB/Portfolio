import React, { useEffect, useState } from "react";
import "./choosePokemon.css";
import { getPokemons } from "../../services/getPokemonNumber";

const ChoosePokemon = () => {
  const [pokemonData, setPokemonData] = useState("");
  const [pokemonNumber, setPokemonNumber] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`;

  useEffect(() => {
    getPokemons(url).then((res) => setPokemonData(res.data));
  }, [pokemonNumber]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPokemonNumber(Number(inputValue));
    setInputValue("");
  };
  if (pokemonNumber === 0) {
    return (
      <div className="startContainer">
        <h2>Digite o número de um Pokémon</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              id="pkmNmbr"
              placeholder="Número"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button className="btn" type="submit">
              Buscar
            </button>
          </div>
        </form>
      </div>
    );
  } else if (pokemonNumber <= 809) {
    return (
      <div className="startContainer">
        <h2>
          Dados do Pokémon:
          {pokemonData.name}
        </h2>

        <div>
          <p>Número na nationalDex: {pokemonNumber}</p>
          <img
            src={`${process.env.PUBLIC_URL}/img/sprites/${pokemonData.name}.png`}
            alt={pokemonData.name}
          />

          <p>Peso: {pokemonData.weight / 10} Kg</p>
          <p>Altura: {pokemonData.height / 10} metros</p>
        </div>

        <div>
          <h2>Digite o número de outro Pokémon:</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                id="pkmNmbr"
                placeholder="Número"
                value={inputValue}
                onChange={handleInputChange}
              />
              <button className="btn" type="submit">
                Buscar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="errorGen">
        <h1> Não possuimos dados da oitava e nona gerações</h1>
        <div>
          <h2>Digite o número de outro Pokémon:</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                id="pkmNmbr"
                placeholder="Número"
                value={inputValue}
                onChange={handleInputChange}
              />
              <button className="btn" type="submit">
                Buscar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};
export default ChoosePokemon;
