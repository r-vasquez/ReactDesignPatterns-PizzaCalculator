import React from 'react';
import Form from '../Form/Form';
import WithForm from '../Form/WithForm';
import './Container.css';

const FormContainer = WithForm(Form);

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
