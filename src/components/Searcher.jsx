import { Input } from "antd";
import { useState } from "react";
import { getSearch } from '../slices/dataSlice'
import { useDispatch } from "react-redux";



const Searcher = () => {
  const [term, setTerm] = useState('')
  const dispatch = useDispatch();

  const handler = (value) => {
    setTerm(prev => {
      if ( prev !== value) {
        dispatch(getSearch(value))
      }
      return value
    })

  }
    
  return <Input.Search
           placeholder="Buscar..." 
           style={{ marginBottom: 10 }} 
           onSearch={(value) => handler(value)}
          />;
};

export default Searcher;
