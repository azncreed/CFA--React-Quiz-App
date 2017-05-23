import React from 'react';
import { ModalHeader } from 'reactstrap';

// Header Component containing Introduction to Quiz //

const HeaderComponent = (props) => {
	return (
	  <ModalHeader className="intro">
	     <p id="start">In a galaxy far far away, there once was a quiz made 
	     for all the Star Wars fans out there&hellip;</p>



		<img src={"https://pixel.nymag.com/imgs/daily/vulture/2016/12/18/18-Star-Wars-Logo.w190.h190.2x.jpg"} />
		<p>Welcome to The Star Wars Quiz</p>
		<p>Do you have what it takes to be the ultimate Star Wars fan?</p>
		<p>Well here's your chance now. Below there are a list of questions for you to answer. The higher your
		score is, the better.</p>
		<p>These questions are based on the entire Star Wars Saga. </p>
		<p>May the force be with you </p>
	  </ModalHeader>

	)
}

export default HeaderComponent;