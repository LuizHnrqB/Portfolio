import axios from "axios";

export const getPokemons = (url) => {
  return axios.get(url);
};
