import React from 'react';
import './Result.css';
function Result(props) {
  return (
    <>
      <h3>Necesitaras {props.numeroPizzas} pizzas *</h3>
      <input type='submit' value='Reset' className='btn' onClick={props.handleReset} />
    </>
  );
}

export default Result;
