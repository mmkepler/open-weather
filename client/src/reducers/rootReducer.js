import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import inputReducer from './inputReducer';
import forecastReducer from './forecastReducer';

const rootReducer = combineReducers({
  weatherReducer: weatherReducer,
  inputReducer: inputReducer,
  forecastReducer: forecastReducer
});

export default rootReducer;