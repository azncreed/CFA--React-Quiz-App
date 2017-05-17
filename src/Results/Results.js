import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Results extends Component {
	render() {
		return(
		  <div>
			<h3>{this.props.end_message}</h3>
			<p> Your score was: {this.props.score}</p>
			<Button bsSytle="primary" onClick={this.props.handleRetry}>Retry</Button>
		  </div>
		) 

		}
	}

Results.propTypes = {
	end_message: PropTypes.string.end_message,
	score: PropTypes.number.isRequired,
	restart: PropTypes.func.isRequired
}

Results.defaultProps = {
	end_message: 'CONGRATULATIONS!!!'
}



export default Results;
