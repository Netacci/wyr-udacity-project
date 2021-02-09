import React, { createContext, useState } from 'react';

export const ValueContext = createContext();
export const UserContext = createContext();

export const ValueProvider = (props) => {
	const [value, setValue] = useState();
	const [users, setUsers] = useState([]);

	return (
		<ValueContext.Provider value={[value, setValue]}>
			<UserContext.Provider value={[users, setUsers]}>
				{props.children}
			</UserContext.Provider>
		</ValueContext.Provider>
	);
};
