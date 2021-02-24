'use strict';
const React = require('react');
const {Text} = require('ink');
const { useState, useEffect } = require('react');


const App = () => {
	const [counter, setCounter] = useState(0);
	const [number, setNumber] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCounter(previousCounter => previousCounter + 1);
		}, 100);

		return () => {
			clearInterval(timer);
		};
	}, []);

	const currentNumber = () =>{
		number = Math.floor(Math.random() * 100);
		setNumber(number);
	}

	return <>
	<Text>Hoger of lager dan: {currentNumber}</Text>
	<Text color="green">{counter} tests passed</Text>
	</>;
};

module.exports = App;
