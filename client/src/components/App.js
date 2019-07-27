import React from 'react';
import './css/App.css';
import './css/weather-icons.min.css';
import Current from './Current';
import Details from './Details';
import DetailsToggle from './DetailsToggle';
import Forecast from './Forecast';
import ForecastToggle from './ForecastToggle';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { WEATHER_UPDATE, INPUT_UPDATE, SUBMIT_CLEAR, SEARCH_ERROR, DETAILS_TOGGLE, FORECAST_TOGGLE, FORECAST_UPDATE, LOADING } from '../actions/weatherActions';

  
const mapStateToProps = state => {
  return {
    city: state.weatherReducer.city,
    datetime: state.weatherReducer.datetime,
    currenttemp: state.weatherReducer.currenttemp,
    lowtemp: state.weatherReducer.lowtemp,
    hightemp: state.weatherReducer.hightemp,
    icon: state.weatherReducer.icon,
    weather: state.weatherReducer.weather,
    wind: state.weatherReducer.wind,
    humidity: state.weatherReducer.humidity,
    pressure: state.weatherReducer.pressure,
    visibility: state.weatherReducer.visibility,
    sunrise: state.weatherReducer.sunrise,
    sunset: state.weatherReducer.sunset,
    input: state.inputReducer.input,
    error: state.inputReducer.error,
    detailsToggle: state.weatherReducer.detailsToggle,
    forecastToggle: state.weatherReducer.forecastToggle,
    forecast: state.forecastReducer.forecast,
    loading: state.weatherReducer.loading
  }
};

const mapDispatchToProps = dispatch => ({
  loadData: (data) => {
    dispatch({type: WEATHER_UPDATE, payload: data})
  },
  onKeyup: (info) => {
    dispatch({type: INPUT_UPDATE, payload: info})
  },
  submitClear: () => {
    dispatch({type: SUBMIT_CLEAR})
  },
  flagError: (bool) => {
    dispatch({type: SEARCH_ERROR, payload: bool})
  },
  toggleDetails: () => {
    dispatch({type: DETAILS_TOGGLE})
  },
  toggleForecast: () => {
    dispatch({type: FORECAST_TOGGLE})
  },
  updateForecast: (forecasts) => {
    dispatch({type: FORECAST_UPDATE, payload: forecasts})
  },
  updateLoading: () => {
    dispatch({type: LOADING})
  }
});


 class App extends React.Component {

  componentWillMount() {
    
    navigator.geolocation.getCurrentPosition(position => { 
      axios.post('/api/find', {lat: position.coords.latitude, lon: position.coords.longitude})
      .then(res => {
        this.props.loadData(res.data);
        this.props.updateLoading();
      });
    });
  }toggleForecast

  render = () => (
    <div className="container-fluid" id="main-bg">

    {
      this.props.loading ? 
        <div id='notice' >
          <div className='spinner-grow spin' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
          <div className='spinner-grow spin' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
          <div className='spinner-grow spin' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      : null
    }
      
            
        


      <Header
        input={this.props.input}
        onKeyup={this.props.onKeyup}
        submitClear={this.props.submitClear}
        loadData={this.props.loadData}
        flagError={this.props.flagError}
        updateLoading={this.props.updateLoading}
        forecastToggle={this.props.toggleForecast}
      />




      {
        this.props.loading ?  
        (<div className="modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            </div>
          </div>
        </div>
        </div>) : null
      }
      
      
      { 
      this.props.error ? 
        (<div id='alert'>
        <p>City entered does not exist. Please try again</p>
        </div>) : null
      }
      
      <Current 
        city={this.props.city}
        datetime={this.props.datetime}
        icon={this.props.icon}
        weather={this.props.weather}
        currenttemp={this.props.currenttemp}
        lowtemp={this.props.lowtemp}
        hightemp={this.props.hightemp}
        
        
      />
      {this.props.detailsToggle ? 
      (<Details 
      wind={this.props.wind}
      humidity={this.props.humidity}
      pressure={this.props.pressure}
      visibility={this.props.visibility}
      sunrise={this.props.sunrise}
      sunset={this.props.sunset}
      />)
      : 
      (<DetailsToggle 
      detailsToggle={this.props.toggleDetails}
      
      />)
      }

      {this.props.forecastToggle ? 
      <Forecast 
        forecast={this.props.forecast}
      />
      :
      <ForecastToggle 
      forecastToggle={this.props.toggleForecast}
      updateForecast={this.props.updateForecast}
      city={this.props.city}
      updateLoading={this.props.updateLoading}
      />

      }
      
      <Footer />
    </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(App);