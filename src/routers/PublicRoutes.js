import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import  PropTypes from 'prop-types'; 

export const PublicRoutes = ({ 
	isAuthenticated, 
	component: Componente, 
	...rest
}) =>{
	return(	
		<div>
			<Route 
				{ ...rest }
				component={
					(props) =>(
						( isAuthenticated )
						? <Redirect to="/" />
						: <Componente {...props} />
					)
				}
			/>
		</div>
	);
}

PublicRoutes.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired
}
