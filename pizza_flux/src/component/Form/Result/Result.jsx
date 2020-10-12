import React from 'react';
import { Component } from 'react';
import * as Actions from '../../Actions';
import ContainerStore from '../../ContainerStore';
import './Result.css';

class Result extends Component {
  constructor() {
    super();
    this.state = ContainerStore.getState();
  }

  updateState = () => {
    this.setState(ContainerStore.getState());
  };

  componentDidMount() {
    ContainerStore.on('change', this.updateState);
  }

  componentWillUnmount() {
    ContainerStore.off('change', this.updateState);
  }
  reset = () => {
    Actions.reset();
  };

  render() {
    return (
      <>
        <h3>Necesitaras {this.state.pizzas} pizzas *</h3>
        <input type='submit' value='Reset' className='btn' onClick={this.reset} />
      </>
    );
  }
}

export default Result;
