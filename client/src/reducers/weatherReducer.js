import { WEATHER_UPDATE } from '../actions/weatherActions';
import initialState from './initialState';


const weatherReducer = (state = initialState, action) => {
  switch(action.type){
    case WEATHER_UPDATE : {
      return {
        ...state,
        city: action.payload.city,
        dateTime: action.payload.datetime,
        currenttemp: action.payload.currenttemp,
        lowtemp: action.payload.lowtemp,
        hightemp: action.payload.hightemp,
        icon: action.payload.icon,
        weather: action.payload.weather,
        wind: action.payload.wind,
        humidity: action.payload.humidity,
        pressure: action.payload.pressure,
        visibility: action.payload.visibility,
        sunrise: action.payload.sunrise,
        sunset: action.payload.sunset
      }
      
    }
    default: 
      return state;
  }
};

export default weatherReducer;