import React from 'react';
import axios from 'axios';

export default class forecastToggle extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.updateLoading();
    console.log('city ', this.props.city)
    this.props.forecastToggle();
    axios.post('/forecast', {city: this.props.city})
    .then((res) => {
      console.log('recieved from forecast', res.data);
      this.props.updateForecast(res.data);
      this.props.updateLoading();
    })
    .catch(err => console.log('error retrieving forecast', err));
  }
  
  render = () => (
    <div className='d-flex justify-content-center' onClick={e => this.handleClick(e)}>
      <div className="card d-flex justify-content-center" id='details'>
        <div className="card-body">
        <div className='show-data'>
          <div className='row'>
            <div className='col-3'></div>
            <div className='col-4'>
            <p className='toggle-button'>forecast</p>
            </div>
            <div className='col-2'>
            <p className='toggle-button'>+</p>
            </div>
            <div className='col-3'></div>
          </div>
        </div>          
      </div>
    </div>
  </div>
  )
}
