import React from 'react';


export default class Forecast extends React.Component {
  render = () => (
    <div>
      <div className='d-flex justify-content-center'>
        <div className="card d-flex justify-content-center" id='forecast'>
          <div className="card-body">
          <div className='hidden-card'>
            <div className='row'>
              <div className='col-4'>
              <div className='details-seperator'></div>
              </div>
              <div className='col-4'>
                <p>forecast</p>
              </div>
              <div className='col-4'>
                <div className='details-seperator'></div>
              </div>
            </div>
            <div className='forecast-block'>

              {/*Shows code block for each item in array of forecasts */
                this.props.forecast.map((el, index) => {
                  return (
                    <div className='slot' key={index}>
                      <div className='row' >
                        <div className='col-4'>
                          <p className='forecast-date'>{el.date}</p>
                        </div>
                        <div className='col-4'>
                          <p className='forecast-temp'>{el.temp}&#176;</p>
                        </div>
                        <div className='col-4'>
                          <i className={`forecast-icon ${el.icon}`}></i>
                        </div>
                      </div>
                    </div>
                  );
                })
              }
              
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}