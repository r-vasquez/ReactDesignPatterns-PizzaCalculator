import React from 'react';
import './Result.css';

function Result(props) {
  const { numeroPizzas, handleReset } = props;
  return (
    <>
      <h3>Necesitaras {numeroPizzas} pizzas *</h3>
      <input type='submit' value='Reset' className='btn' onClick={handleReset} />
    </>
  );
}

export default Result;
