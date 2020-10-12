import React from 'react';
import './Input.css';

function Input(props) {
  const { handlePerson, handleSlices } = props;
  return (
    <>
      <label htmlFor='guest'>Indique # de invitad@s</label>
      <br />
      <input id='guest' name='guest' type='number' className='inpText' onChange={handlePerson} />
      <br />
      <label htmlFor='slices'>¿Cuántas porciones por persona?</label>
      <br />
      <input id='slices' name='guest' type='number' className='inpText' onChange={handleSlices} />
    </>
  );
}

export default Input;
