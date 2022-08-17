import { useEffect } from 'react';
import { Col, Spin } from 'antd'; 
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { Message } from './components/Message';
import logo from './statics/logo.svg';
import { fetchPokemonWithDetails } from './slices/dataSlice';
import { setNotFound } from './slices/uiSlice';
import './App.css';

function App() {

  const pokemons = useSelector(state => state.data.pokemons, shallowEqual);
  const {loading, notFound} = useSelector(state => {
    return { loading: state.ui.loading, notFound :state.ui.notFound }
  });
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchPokemonWithDetails()); 
      dispatch(setNotFound(false)); 
  }, []);

  const handler = () => {
    dispatch(fetchPokemonWithDetails());
    dispatch(setNotFound(false)); 
  }

  return (
    <div className="App">
      <Col span={4} offset={10} >
        <img src={logo} alt="Pokedux" onClick={handler} style={{ cursor:"Pointer" }} />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {notFound ? <Message>No encontrado</Message> : ''}
      {loading ? (<Col offset={12}>
                    <Spin spinning size='large' />
                  </Col>) : (<PokemonList pokemons={pokemons} />)}
    </div>
  );
}

export default App;
