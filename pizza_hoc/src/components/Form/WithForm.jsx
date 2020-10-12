import React, { Component } from 'react';

const WithForm = FormRender =>
  class extends Component {
    constructor() {
      super();
      this.state = {
        person: 0,
        slicesPerPerson: 0,
        pizzas: 0
      };
    }

    handlePerson = event => {
      this.setState({
        person: event.target.value,
        pizzas: Math.ceil((event.target.value * this.state.slicesPerPerson) / 8)
      });
    };

    handleSlices = event => {
      this.setState({
        slicesPerPerson: event.target.value,
        pizzas: Math.ceil((event.target.value * this.state.person) / 8)
      });
    };

    handleReset = () => {
      this.setState({
        person: 0,
        slicesPerPerson: 0,
        pizzas: 0
      });
    };

    render() {
      return (
        <FormRender
          pizzas={this.state.pizzas}
          handleSlices={this.handleSlices}
          handlePerson={this.handlePerson}
          handleReset={this.handleReset}
        />
      );
    }
  };

export default WithForm;
