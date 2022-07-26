import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from "../actions/types";

const initialState = {
  pokemons: [],
  loading: false,
};

export const pokemonsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_POKEMONS:
      return {...state, pokemons: action.payload };
    case SET_FAVORITE:
      const newPokemonsList = [...state.pokemons];
      const currentPokedemonIndex = newPokemonsList.findIndex(
        (pokemon) => {
          return pokemon.id === action.payload.pokemonId;
        }
      );
      if (currentPokedemonIndex < 0) {
        return state;
      }
      newPokemonsList[currentPokedemonIndex].favorite = !newPokemonsList[currentPokedemonIndex].favorite
      return {...state, pokemons: newPokemonsList};
    case SET_LOADING:
      return {...state, loading: action.payload };
    default:
      return state
  }
};