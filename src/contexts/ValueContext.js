import React, { createContext, useState } from 'react';

export const ValueContext = createContext();

export const ValueProvider = (props) => {
	const [value, setValue] = useState();

	return (
		<ValueContext.Provider value={[value, setValue]}>
			{props.children}
		</ValueContext.Provider>
	);
};
