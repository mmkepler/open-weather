import React from "react";
import axios from "axios";

export default class Header extends React.Component {
  //Search for city or zipcode
  handleSubmit = (e) => {
    e.preventDefault();

    //This closes the forecast window if it is open
    if(this.props.isToggle === true){
      this.props.toggleForecast();
    }

    //This closes the details window if it is open
    if(this.props.isDetails === true){
      this.props.detailsToggle();
    }
    
    //resets any errors being displaed and starts the loading screen
    this.props.flagError(false);
    this.props.updateError("");
    this.props.updateLoading();

    let city = this.props.input.match(/^(.+?),/).trim();
    let state = this.props.input.match(/,(.*)/).trim()
    console.log("city ", city)
    console.log("state ", state)
    
    //fetch data from server
    axios.post("/search" ,{city: city, state_id: state})
    .then(res => {
      this.props.updateLoading();
      //if the obj returned is an error
      if(res.data === "error"){
        this.props.flagError(true);
        this.props.updateError("City does not exist");
        //reset the state data on city
        this.props.loadData(
          {"city": null,
        "datetime": null,
        "currenttemp": null,
        "lowtemp": null,
        "hightemp": null,
        "icon": null,
        "weather": null,
        "wind": null,
        "humidity": null,
        "pressure": null,
        "visibility": null,
        "sunrise": null,
        "sunset": null
      });
        //sho error and clear search
        console.log(res.data);
        this.props.submitClear()
        this.props.flagError(true);
        this.props.updateError("This city doen't exist");
      } else {
        //update city weather data
        this.props.loadData(res.data);
        this.props.submitClear();
      }
    })
    .catch(err => {
      console.log("error searching for city ", err);
      this.props.submitClear();
      this.props.updateLoading();
      this.props.flagError(true);
      this.props.updateError("You may be offline");
    })
  }

  render = () => (
    <div className="header">
      <nav className="navbar">
        <div className="d-flex justify-content-center w-100" id="nav-container">
          <div className="row w-100">
            <div className="col-md-6 col-sm-12 d-flex justify-content-center">
              <a href="/">
              <p className="navbar-brand" id="logo-text"> 
              <i className="wi wi-sunrise" id="logo-icon"></i>
              &nbsp;Weather </p>
              </a>
            </div>
            <div className="col-md-6 col-sm-12 d-flex justify-content-center">
              <form className="form-inline" onSubmit={e => this.handleSubmit(e)}>
                <div className="input-group " id="input">
                <input placeholder="City or Zipcode" aria-label="Search" 
                onChange={ e => this.props.onKeyup(e)} 
                value={this.props.input} id="search-input" width="260" required/>
                  <div className="input-group-append">
                    <button className="btn"  id="search-btn" type="submit" >Search</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}