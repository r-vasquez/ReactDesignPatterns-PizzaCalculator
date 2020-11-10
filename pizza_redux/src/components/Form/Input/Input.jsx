import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeGuest, changeSlices } from '../../../redux/actions';
import './Input.css';

class Input extends Component {
  render() {
    const { guest, slices, changeGuest, changeSlices } = this.props;
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
          onChange={changeGuest}
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
          onChange={changeSlices}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    guest: state.guest,
    slices: state.slices
  };
};

const mapDispatchToProps = {
  changeGuest,
  changeSlices
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
