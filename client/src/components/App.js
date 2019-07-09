import React from 'react';
import './App.css';
import Current from './Current';
import Forecast from './Forecast';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lng: null,
    }
  }
  componentWillMount() {

    navigator.geolocation.getCurrentPosition(position => {
      this.setState({ lat: position.coords.latitude, lng: position.coords.longitude }, 
        () => {
          axios.post('/api/find', {lat: this.state.lat, lng: this.state.lng})
        })
      }
    )
  }

  render = () => (
    <div className="container-fluid" id="main-bg">
      <Header />
      <div >
        <h1>Current Position:</h1>
        <p>Latitude: {this.state.lat}</p>
        <p>Longitude: {this.state.lng}</p>
      </div>
      
      <Current />
      
      <Forecast />
      <Footer />
    </div>
  )
};

