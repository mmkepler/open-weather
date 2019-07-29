import { WEATHER_UPDATE, DETAILS_TOGGLE, FORECAST_TOGGLE, LOADING} from '../actions/weatherActions';
import initialState from './initialState';

const weatherReducer = (state = initialState, action) => {
  switch(action.type){
    case WEATHER_UPDATE : {
      return {
        ...state,
        city: action.payload.city,
        datetime: action.payload.datetime,
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
    case DETAILS_TOGGLE : {
      return {
        ...state,
      detailsToggle: !state.detailsToggle
      }
    }
    case FORECAST_TOGGLE : {
      return {
        ...state,
        forecastToggle: !state.forecastToggle
      }
    }
    case LOADING : {
      return {
        ...state,
        loading: !state.loading
      }
    }
    default: 
      return state;
  }
};

export default weatherReducer;