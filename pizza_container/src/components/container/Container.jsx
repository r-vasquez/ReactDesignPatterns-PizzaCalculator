import React from 'react';
import FormContainer from '../form/FormContainer';
import './Container.css';

function Container() {
  return (
    <div className='container'>
      <div className='box'>
        <h1>Calculadora de pizzas</h1>
        <FormContainer />
        <i>*Cada pizza tiene 8 porciones</i>
      </div>
    </div>
  );
}

export default Container;
