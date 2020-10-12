import React from 'react';
import './Container.css';

import Form from '../Form/Form';

function Container() {
  return (
    <div className='container'>
      <div className='box'>
        <h1>Calculadora de pizzas</h1>
        <Form />
        <i>*Cada pizza tiene 8 porciones</i>
      </div>
    </div>
  );
}

export default Container;
