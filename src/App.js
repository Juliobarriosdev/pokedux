import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col } from 'antd'; 
import { getPokemon } from './api';
import { setPokemons as setPokemonsActions } from './actions';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg';
import './App.css';

function App({pokemons, setPokemons}) {

  useEffect(() => {
    (async () => {
      const PokemonRes = await getPokemon();
      setPokemons(PokemonRes);
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

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispathToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispathToProps)(App);
