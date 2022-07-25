import { useEffect } from 'react';
import { Col } from 'antd'; 
import { getPokemon } from './api';
// import { setPokemons } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonWithDetails } from './actions';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg';
import './App.css';

function App() {

  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const pokemonRes = await getPokemon();
      dispatch(getPokemonWithDetails(pokemonRes)); 
    })();
    
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10} >
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
        <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
