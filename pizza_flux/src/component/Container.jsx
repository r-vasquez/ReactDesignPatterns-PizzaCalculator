import React from 'react';
import Result from './Result';
import './Container.css';
function Container() {
  return (
    <div className='container'>
      <div className='box'>
        <h1>Calculadora de pizzas</h1>
        <form action='#'>
          <label htmlFor='guest'>Indique # de invitad@s</label>
          <br />
          <input id='guest' name='guest' type='text' className='inpText' />
          <br />
          <label htmlFor='portions'>¿Cuántas porciones por persona?</label>
          <br />
          <input id='portions' name='guest' type='text' className='inpText' />
          <br />
          <Result />
        </form>
      </div>
    </div>
  );
}

export default Container;
