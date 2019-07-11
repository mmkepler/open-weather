import React from 'react';


export default class Current extends React.Component {
  render = () => (
    <div className='d-flex justify-content-center'>
      <div className="card d-flex justify-content-center" id='current'>
        <div className="card-body">
          <h1 className='card-title' id='city'>Columbus</h1>
          <p id='date'>07/10/2019</p>
          <br></br>
          <div id='weather-text'>
          <p><i className="wi wi-day-sleet-storm" id='weather-icon'></i>&nbsp;&nbsp;Weather</p>
          </div>
          <div className='row'>
            <div className='col-8 d-flex justify-content-end'>
              <p id='current-temp' className='d-flex justify-content-end'>73&#176;</p>
            </div>
            <div className='col-4' id='low-high'>
              <div className='row'>
                <div id='low-temp'>
                  <p id='low-temp-text'>62&#8457;</p>
                </div>
              </div>
              <div className='row'>
                <div id='high-temp'>
                  <p>89&#8457;</p>
                </div>
              </div>  
            </div>
          </div>
    
          <div className='row'>
            <div className='col-4'>
            <div id='details-seperator'></div>
            </div>
            <div className='col-4'>
              <p>details</p>
            </div>
            <div className='col-4'>
              <div id='details-seperator'></div>
            </div>
          </div>

          <div>
            <div className='row weather-row'>
              <div className='col-6 weather-blocks'>
                <div className='block d-flex justify-content-center'>
                  <table>
                    <tbody>
                      <tr>
                      <td>
                          <i className="wi wi-strong-wind" id='weather-icon'></i>
                        </td>
                      </tr>
                      <tr>
                        <td>Wind</td>
                      </tr>
                      <tr>
                        <td>4 mph</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='col-6 weather-blocks'>
                <div className='block d-flex justify-content-center'>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <i className="wi wi-humidity" id='weather-icon'></i>
                        </td>
                      </tr>
                      <tr>
                      <td>Humidity</td>
                      </tr>
                      <tr>
                      <td>{} %</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className='row weather-row'>
              <div className='col-6 weather-blocks'>
                <div className='block d-flex justify-content-center'>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <i className="wi wi-barometer" id='weather-icon'></i>
                        </td>
                      </tr>
                      <tr>
                      <td>Pressure</td>
                      </tr>
                      <tr>
                      <td>4 mph</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='col-6 weather-blocks'>
                <div className='block d-flex justify-content-center'>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <i className="wi wi-cloud" id='weather-icon'></i>
                        </td>
                      </tr>
                      <tr>
                      <td>Visibility</td>
                      </tr>
                      <tr>
                      <td>4 mph</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
      
            <div className='row weather-row'>
              <div className='col-6 weather-blocks'>
                <div className='block d-flex justify-content-center'>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <i className="wi wi-sunrise" id='weather-icon'></i>
                        </td>
                      </tr>
                      <tr>
                      <td>Sunrise</td>
                      </tr>
                      <tr>
                      <td>4 mph</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='col-6 weather-blocks'>
                <div className='block d-flex justify-content-center'>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <i className="wi wi-sunset" id='weather-icon'></i>
                        </td>
                      </tr>
                      <tr>
                      <td>Sunset</td>
                      </tr>
                      <tr>
                      <td>4 mph</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}