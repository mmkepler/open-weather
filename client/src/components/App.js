import React from 'react';
import './css/App.css';
import './css/weather-icons.min.css';
import Current from './Current';
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
      city: 'Columbus',
      date: "07/10/2019"
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
      <Current />
      <Footer />
    </div>
  )
};

