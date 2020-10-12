import React from 'react';
import Form from '../Form/Form';
import FormContainer from '../Form/FormContainer';
import FormWithChanges from '../FormWithChanges/FormWithChanges';
import './Container.css';

function Container() {
  return (
    <>
      <div className='container'>
        <div className='box'>
          <h1>Calculadora de Pizzas</h1>
          <FormContainer
            render={(pizzas, handleSlices, handlePerson, handleReset) => {
              return (
                <Form
                  pizzas={pizzas}
                  handleSlices={handleSlices}
                  handlePerson={handlePerson}
                  handleReset={handleReset}
                />
              );
            }}
          />
          <i>*Cada pizza tiene 8 porciones</i>
        </div>
        <div className='box'>
          <h1>Pizza Calculator</h1>
          <FormContainer
            render={(pizzas, handleSlices, handlePerson, handleReset) => {
              return (
                <FormWithChanges
                  pizzas={pizzas}
                  handleSlices={handleSlices}
                  handlePerson={handlePerson}
                  handleReset={handleReset}
                />
              );
            }}
          />
          <i>*Each pizza has 8 slices</i>
        </div>
      </div>
    </>
  );
}

export default Container;
