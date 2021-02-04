import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import  PropTypes from 'prop-types'; 

export const PrivateRoutes = ({ 
	isAuthenticated, 
	component: Componente, 
	...rest
}) =>{
	return(	
		<div>
			<Route 
				{ ...rest }
				component={
					(props) => (
						( isAuthenticated )
						? <Componente {...props} />
						: <Redirect to="/auth/login" />
					)
				}
			/>
		</div>
	);
}

PrivateRoutes.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired
}
