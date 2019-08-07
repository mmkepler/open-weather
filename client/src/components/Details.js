import React from 'react';

export default class Details extends React.Component {
  
  render = () => (
    <div>
      <div className='d-flex justify-content-center'>
        <div className="card d-flex justify-content-center" id='details'>
          <div className="card-body">
          <div className='hidden-card'>
            <div className='row'>
              <div className='col-4'>
                <div className='details-seperator'></div>
              </div>
              <div className='col-4'>
                <p>details</p>
              </div>
              <div className='col-4'>
                <div className='details-seperator'></div>
              </div>
            </div>

            <div className='row weather-row'>
              <div className='col-6 weather-blocks'>
                <i className="wi wi-strong-wind weather-icon"></i>
                <p className='details-data'>wind</p>
                <p>{this.props.wind} mph</p>
              </div>
              <div className='col-6 weather-blocks'>
                <i className="wi wi-humidity weather-icon" ></i>
                <p className='details-data'>humidity</p>
                <p>{this.props.humidity} %</p>
              </div>
            </div>        

            <div className='row weather-row'>
              <div className='col-6 weather-blocks'>
                <i className="wi wi-barometer weather-icon"></i>
                <p className='details-data'>pressure</p>
                <p>{this.props.pressure} in</p>
              </div>
              <div className='col-6 weather-blocks'>
                <i className="wi wi-cloud weather-icon" ></i>
                <p className='details-data'>visibility</p>
                <p>{this.props.visibility} mi</p>
              </div>
            </div>     

            <div className='row weather-row'>
              <div className='col-6 weather-blocks'>
                <i className="wi wi-sunrise weather-icon"></i>
                <p className='details-data'>sunrise</p>
                <p>{this.props.sunrise}</p>
              </div>
              <div className='col-6 weather-blocks'>
                <i className="wi wi-sunset weather-icon" ></i>
                <p className='details-data'>sunset</p>
                <p>{this.props.sunset}</p>
              </div>
            </div>   
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}