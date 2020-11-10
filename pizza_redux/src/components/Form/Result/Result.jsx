import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { reset } from '../../../redux/actions';
import './Result.css';

class Result extends Component {
  render() {
    const { pizzas, reset } = this.props;
    return (
      <>
        <h3>Necesitaras {pizzas} pizzas *</h3>
        <input type='submit' value='Reset' className='btn' onClick={reset} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    pizzas: state.pizzas
  };
};

const mapDispatchToProps = {
  reset
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
