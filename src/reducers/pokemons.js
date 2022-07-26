import { fromJS } from "immutable";
import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from "../actions/types";

const initialState = fromJS({
  pokemons: [],
  loading: false,
});

export const pokemonsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_POKEMONS:
      return state.setIn(['pokemons'], fromJS(action.payload));
    case SET_FAVORITE:
      const currentPokedemonIndex = state.get('pokemons').findIndex((pokemon) => {
          return pokemon.get('id') === action.payload.pokemonId;
        }
      );
      if (currentPokedemonIndex < 0) {
        return state;
      }
      
      const isFavorite = state.getIn(['pokemons', currentPokedemonIndex, 'favorite']);

      return state.setIn(['pokemons', currentPokedemonIndex, 'favorite'], !isFavorite);

      // return {...state, pokemons: newPokemonsList};
    case SET_LOADING:
      // return {...state, loading: action.payload };
      return state.setIn(['loading'], action.payload);
    default:
      return state
  }
};