import { combineReducers } from "redux"; // si usamos inmutablejS debemos instlar `npm i redux-inmutable`
import dataReducer from '../slices/dataSlice';
import uiReducer from '../slices/uiSlice';

const rootReducer = combineReducers({
  data: dataReducer,
  ui: uiReducer
});

export default rootReducer;