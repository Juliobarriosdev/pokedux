import { useEffect } from 'react';
import { Col, Spin } from 'antd'; 
import { getPokemon } from './api';
// import { setPokemons } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonWithDetails, setLoading } from './actions';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg';
import './App.css';

function App() {

  const pokemons = useSelector(state => state.get('pokemons')).toJS();
  const loading = useSelector(state => state.get('loading'));
  // const loading = false;
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(setLoading(true));
      const pokemonRes = await getPokemon();
      dispatch(getPokemonWithDetails(pokemonRes)); 
      dispatch(setLoading(false));
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
      {loading ? (<Col offset={12}>
                    <Spin spinning size='large' />
                  </Col>) : (<PokemonList pokemons={pokemons} />)}
    </div>
  );
}

export default App;
