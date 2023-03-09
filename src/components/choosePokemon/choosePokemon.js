import React, { useEffect, useState } from "react";
import "./choosePokemon.css";
import axios from "axios";

const ChoosePokemon = () => {
  const [pokemonData, setPokemonData] = useState({
    name: "",
    types: [
      {
        type: {
          name: "fogo",
        },
      },
      {
        type: {
          name: "fogo2",
        },
      },
    ],
  });
  const [pokemonNumber, setPokemonNumber] = useState(0);
  const [inputValue, setInputValue] = useState("");

  async function fetchPokemon(pokemonNumber) {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`
    );
    setPokemonData(response.data);
    console.log(response.data);
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPokemonNumber(Number(inputValue));
    fetchPokemon(inputValue);
    setInputValue("");
  };
  if (pokemonNumber === 0) {
    return (
      <div className="startContainer">
        <h2>Digite o número de um Pokémon</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
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
          Dados do Pokémon:{" "}
          {pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}
        </h2>
        <div>
          <p>Número na Pokedex Geral: {pokemonNumber}</p>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/img/sprites/${pokemonData.name}.png`}
              alt={pokemonData.name}
            />
          </div>
          <div>
            <p>Peso: {pokemonData.weight / 10} Kg</p>
          </div>
          <div>
            <p>Altura: {pokemonData.height / 10} metros</p>
          </div>
          <div>
            <p>
              Tipos: {pokemonData.types.map((el) => el.type.name).join(", ")}
            </p>
          </div>
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
