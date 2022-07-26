import { useEffect } from 'react';
import { Col, Spin } from 'antd'; 
import { getPokemon } from './api';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getPokemonWithDetails, setLoading } from './actions';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg';
import './App.css';

function App() {

  const pokemons = useSelector(state => state.getIn(['data', 'pokemons'], shallowEqual)).toJS();
  const loading = useSelector(state => state.getIn(['ui','loading']));
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
