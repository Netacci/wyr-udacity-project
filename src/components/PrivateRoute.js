import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { ValueContext } from '../contexts/ValueContext';

export default function PrivateRoute({ component: Component, ...rest }) {
	const [value] = useContext(ValueContext);
	console.log(value);

	return (
		<Route
			{...rest}
			render={(props) => {
				return value ? <Component {...props} /> : <Redirect to='/signin' />;
			}}
		/>
	);
}
