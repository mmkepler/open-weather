import React from 'react';

export default class Header extends React.Component {
  state = {
      
  }

  render = () => (
    <div className='header'>
      <nav className='navbar'>
        <div className='d-flex justify-content-center w-100' id='nav-container'>
          <div className='row w-100'>
            <div className='col-md-6 col-sm-12 d-flex justify-content-center'>
            
              <p className="navbar-brand" id="logo-text"> 
              <i className="wi wi-sunrise" id='logo-icon'></i>
              &nbsp;Weather </p>
              
            </div>


            <div className='col-md-6 col-sm-12'>
              <form className="form-inline d-flex justify-content-center">
                <div className='input-group' id='input'>
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                  <button className='btn'  id='search-btn' type="submit">Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}