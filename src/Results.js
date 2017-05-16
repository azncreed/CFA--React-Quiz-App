import React, { Component } from 'react';

class Results extends Component {
	render() {
		return(
		  <div>
			<h3>{this.props.end_message}</h3>
			<p> Your score was: {this.props.score}</p>
			<button onClick={this.props.handleRetry}>Retry</button>
		  </div>
		) 

		}
	}


export default Results;
