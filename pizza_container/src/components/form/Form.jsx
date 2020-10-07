import React from 'react';
import Input from './input/Input';
import Result from './result/Result';

function Form(props) {
  return (
    <>
      <form action='#'>
        <Input handleSlices={props.handleSlices} handlePerson={props.handlePerson} />
        <Result numeroPizzas={props.pizzas} handleReset={props.handleReset} />
      </form>
    </>
  );
}

export default Form;
