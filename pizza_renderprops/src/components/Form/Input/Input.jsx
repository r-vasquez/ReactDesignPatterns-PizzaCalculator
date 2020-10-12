import React from 'react';
import './Input.css';

function Input(props) {
  return (
    <>
      <label htmlFor='guest'>Indique # de invitad@s</label>
      <br />
      <input
        id='guest'
        name='guest'
        type='number'
        className='inpText'
        onChange={props.handlePerson}
      />
      <br />
      <label htmlFor='slices'>¿Cuántas porciones por persona?</label>
      <br />
      <input
        id='slices'
        name='guest'
        type='number'
        className='inpText'
        onChange={props.handleSlices}
      />
    </>
  );
}

export default Input;
