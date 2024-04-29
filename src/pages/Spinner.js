import React, { Component } from 'react';
import spin from "./6.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={spin} alt="loading" />
      </div>
    )
  }
}
