import React from 'react';
import axios from 'axios';

export default class forecastToggle extends React.Component {
  handleClick = (e) => {
    e.preventDefault();

    if(this.props.city === null){
      return false;
    } else {
      axios.post('/forecast', {city: this.props.city})
      .then((res) => {
        if(typeof res === 'string' ) {
          this.props.updateError(res);
          this.props.flagError(true);
        } else {
          this.props.updateForecast(res.data);
          this.props.forecastToggle();
        }
      })
      .catch(err => console.log('error retrieving forecast', err));
    }
    
  }
  
  render = () => (
    <div className='d-flex justify-content-center' onClick={e => this.handleClick(e)}>
      <div className="card d-flex justify-content-center" id='details'>
        <div className="card-body">
          <div className='show-data'>
            <div className='row'>
              <div className='col-2'></div>
              <div className='col-5'>
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
