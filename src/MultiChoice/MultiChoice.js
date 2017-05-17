import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const MultiChoice = (props) => {
  	return (
      <div>
  		  {props.answers.map((answer, i) => <Button className="button" key={i} onClick={() => props.updateSelected(answer)}>{answer}</Button>)}
  		  <br />
  		  <p>You have selected: {props.selectedAnswer}</p>
  		  <Button bsStyle="primary" onClick={props.handleSubmit}>Submit</Button>
      </div>
  	)
  }


MultiChoice.propTypes = {
  selectedAnswer: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  answers: PropTypes.array.isRequired,
  updateSelected: PropTypes.func.isRequired
}





export default MultiChoice;
