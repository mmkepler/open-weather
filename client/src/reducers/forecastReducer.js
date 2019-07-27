import { FORECAST_UPDATE } from '../actions/weatherActions';
import initialState from './initialState';


const forecastReducer = (state = initialState, action) => {
  switch(action.type){
    case FORECAST_UPDATE : {
      return {
        ...state,
        forecast: action.payload
      }
      
    }
    
    default: 
      return state;
  }
};

export default forecastReducer;