import React, { Component } from 'react';
import { Container } from 'App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { step } = this.props;

    return (
      <Container>
        <p>Please leave feedback</p>
        <span>0</span>
        <button type="button">Increment by {step}</button>
        <button type="button">Decrement by {step}</button>
      </Container>
    );
  }
}
