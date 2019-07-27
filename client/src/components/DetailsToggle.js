import React from 'react';

export default class DetailsToggle extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.detailsToggle();
  }
  
  render = () => (
    <div className='d-flex justify-content-center' onClick={e => this.handleClick(e)}>
      <div className="card d-flex justify-content-center" id='details'>
        <div className="card-body">
        <div className='show-data'>
          <div className='row'>
            <div className='col-3'></div>
            <div className='col-4'>
            <p className='toggle-button'>details</p>
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
