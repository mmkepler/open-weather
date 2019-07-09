import React from 'react';

export default class Forecast extends React.Component {
  state = {
      
  }
  
  render = () => (
    <div className="card">
      {/*<img className="card-img-top" src="..." alt="Card image cap" />*/}
      <div className="card-body">
        <h5 className="card-title">Forecast</h5>
        <p className="card-text">Forecast text goes here</p>
        {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
      </div>
    </div>
  )
}