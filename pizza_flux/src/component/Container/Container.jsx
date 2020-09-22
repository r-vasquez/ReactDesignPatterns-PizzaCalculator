import React, { Component } from 'react';
import './Container.css';

import Result from '../Result';
import * as Actions from './Actions';
import ContainerStore from './ContainerStore';

class Container extends Component {
  state = ContainerStore.getState();

  updateState = () => {
    this.setState(ContainerStore.getState());
  };

  componentDidMount() {
    ContainerStore.on('change', this.updateState);
  }

  componentWillUnmount() {
    ContainerStore.off('change', this.updateState);
  }

  handleGuest = e => {
    Actions.changeGuest(e.target.value);
    this.calculatePizzas();
  };

  handleSlices = e => {
    Actions.changeSlices(e.target.value);
    this.calculatePizzas();
  };

  calculatePizzas = () => {
    Actions.calculatePizzas();
  };
  reset = () => {
    Actions.reset();
  };

  render() {
    const { guest, slices, pizzas } = this.state;
    return (
      <div className='container'>
        <div className='box'>
          <h1>Calculadora de pizzas</h1>
          <form action='#'>
            <label htmlFor='guest'>Indique # de invitad@s</label>
            <br />
            <input
              id='guest'
              name='guest'
              type='text'
              className='inpText'
              value={guest}
              onChange={this.handleGuest}
            />
            <br />
            <label htmlFor='slices'>¿Cuántas porciones por persona?</label>
            <br />
            <input
              id='slices'
              name='guest'
              type='text'
              className='inpText'
              value={slices}
              onChange={this.handleSlices}
            />
            <br />
            <Result pizzas={pizzas} reset={this.reset} />
          </form>
          <i>*Cada pizza tiene 8 porciones</i>
        </div>
      </div>
    );
  }
}

export default Container;
