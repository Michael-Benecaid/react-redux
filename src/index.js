import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA-JnQB7SrhdyFZtYZfN5vGKESCCvqSisQ';

const App = () =>{
	return (
		<div>
			<SearchBar />
		</div>
		);
}

ReactDOM.render(<App />, document.querySelector('.container'));