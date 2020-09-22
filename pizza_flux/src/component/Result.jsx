import React from 'react';

function Result(props) {
  return (
    <>
      <h3>Necesitaras {props.pizzas} pizzas *</h3>
      <input type='submit' value='Reset' className='btn' onClick={props.reset} />
    </>
  );
}

export default Result;
