import React from 'react';
import Input from './Input/Input';
import Result from './Result/Result';

function Form(props) {
  const { handleSlices, handlePerson, handleReset, pizzas } = props;
  return (
    <>
      <form action='#'>
        <Input handleSlices={handleSlices} handlePerson={handlePerson} />
        <Result numeroPizzas={pizzas} handleReset={handleReset} />
      </form>
    </>
  );
}

export default Form;
