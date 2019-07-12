import React from 'react';
import './css/App.css';
import './css/weather-icons.min.css';
import Current from './Current';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { WEATHER_UPDATE } from '../actions/weatherActions';


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
    sunset: state.weatherReducer.sunset
  }
};

const mapDispatchToProps = dispatch => ({
  loadData: (data) => {
    dispatch({type: WEATHER_UPDATE, payload: data})
  }
});


 class App extends React.Component {

  componentWillMount() {

    navigator.geolocation.getCurrentPosition(position => {
      
        
      axios.post('/api/find', {lat: position.coords.latitude, lon: position.coords.longitude})
      .then(res => {
        this.props.loadData(res.data);
        console.log(this.props);
      });
    
  
      });
  }

  render = () => (
    <div className="container-fluid" id="main-bg">
      <Header />
      <Current 
        city={this.props.city}
        datetime={this.props.datetime}
        icon={this.props.icon}
        weather={this.props.weather}
        currenttemp={this.props.currenttemp}
        lowtemp={this.props.lowtemp}
        hightemp={this.props.hightemp}
        wind={this.props.wind}
        humidity={this.props.humidity}
        pressure={this.props.pressure}
        visibility={this.props.visibility}
        sunrise={this.props.sunrise}
        sunset={this.props.sunset}
      />
      <Footer />
    </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(App);