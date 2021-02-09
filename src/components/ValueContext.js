import React, { createContext, useState } from 'react';

export const ValueContext = createContext();

export const ValueProvider = (props) => {
	const [value, setValue] = useState('sarahedo');
	const [users, setUsers] = useState([]);

	const val = {
		value,
		users,
	};

	return (
		<ValueContext.Provider value={val}>{props.children}</ValueContext.Provider>
	);
};
