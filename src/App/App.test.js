import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


it('newQuiz() resets quiz state', () => {
	let component = shallow(<App />);
	component.instance().setState = jest.fn();

	component.instance().state = {
		progress: 2,
		selected: '42',
		score: 2
	};

	component.instance().newQuiz();

	expect(component.instance().setState).toHaveBeenCalledWith({
		progress: 0,
		selected: 'None yet!',
		score: 0
	});
});