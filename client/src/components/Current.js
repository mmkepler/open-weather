import React from "react";

export default class Current extends React.Component {
  render = () => (
    <div className="d-flex justify-content-center">
      <div className="card d-flex justify-content-center" id="current">
        <div className="card-body">
        <div className="row">
            <div className="col-4">
            <div className="details-seperator"></div>
            </div>
            <div className="col-4">
              <p>current</p>
            </div>
            <div className="col-4">
              <div className="details-seperator"></div>
            </div>
          </div>
          <h1 className="card-title" id="city">{this.props.city}</h1>
          <p id="date">{this.props.datetime}</p>
          <div id="weather-text">
          <p id="weather"><i className={this.props.icon}></i>&nbsp;&nbsp;{this.props.weather}</p>
          </div>
          <div className="row">
            <div className="col-8 d-flex justify-content-end">
              <p id="current-temp" className="d-flex justify-content-end">{this.props.currenttemp} &#176;</p>
            </div>
            <div className="col-4" id="low-high">
              <div className="row">
                <div id="low-temp">
                  <p id="low-temp-text">{this.props.lowtemp}&#8457;</p>
                </div>
              </div>
              <div className="row">
                <div id="high-temp">
                  <p>{this.props.hightemp}&#8457;</p>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}