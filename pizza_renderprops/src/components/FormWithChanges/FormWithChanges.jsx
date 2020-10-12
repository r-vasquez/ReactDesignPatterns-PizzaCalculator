import React from 'react';

function FormWithChanges(props) {
  const { handleSlices, handlePerson, handleReset, pizzas } = props;
  return (
    <form action='#'>
      <label htmlFor='guest'># of Guest</label>
      <br />
      <input id='guest' name='guest' type='number' className='inpText' onChange={handlePerson} />
      <br />
      <label htmlFor='slices'>How many slices per person?</label>
      <br />
      <input id='slices' name='guest' type='number' className='inpText' onChange={handleSlices} />
      <h3>You will need {pizzas} pizzas *</h3>
      <input type='submit' value='Reset' className='btn' onClick={handleReset} />
    </form>
  );
}

export default FormWithChanges;
