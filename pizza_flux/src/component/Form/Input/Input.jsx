import React, { Component } from 'react';
import './Input.css';
import * as Actions from '../../Actions';
import ContainerStore from '../../ContainerStore';

class Input extends Component {
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

  handlePerson = e => {
    Actions.changeGuest(e.target.value);
  };

  handleSlices = e => {
    Actions.changeSlices(e.target.value);
  };

  render() {
    const { guest, slices } = this.state;
    return (
      <>
        <label htmlFor='guest'>Indique # de invitad@s</label>
        <br />
        <input
          id='guest'
          name='guest'
          type='number'
          className='inpText'
          value={guest}
          onChange={this.handlePerson}
        />
        <br />
        <label htmlFor='slices'>¿Cuántas porciones por persona?</label>
        <br />
        <input
          id='slices'
          name='guest'
          type='number'
          className='inpText'
          value={slices}
          onChange={this.handleSlices}
        />
      </>
    );
  }
}

export default Input;
