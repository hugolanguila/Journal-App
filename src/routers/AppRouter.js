import React,{ useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';

import { firebase } from './../firebase/firebase-config';
import { login } from './../actions/auth';
import { AuthRouter } from './AuthRouter';
import { PrivateRoutes } from './PrivateRoutes'; 
import { PublicRoutes } from './PublicRoutes'; 
import { JournalScreen } from '../components/journal/JournalScreen';

export const AppRouter = () => {
    const dispatch  = useDispatch();

	const [ checking, setChecking ] = useState( true );
	const [ isLoggedIn, setIsLoggedIn ] = useState( false );

	useEffect(()=>{
		firebase.auth().onAuthStateChanged((user)=>{
			if(user?.uid){
				dispatch( login( user.uid, user.displayName ));
				setIsLoggedIn( true );
			}else{
				setIsLoggedIn( false );
			}

			setChecking( false );
		});
	},[ dispatch, setChecking, setIsLoggedIn ]);

	if( checking ){
		return (
			<h3>Cargando...</h3>
		);
	}

	return (
        <Router>
            <div>
                <Switch>
                    <PublicRoutes 
						path="/auth"
						isAuthenticated={ isLoggedIn }
                        component={ AuthRouter }
                    />
                    <PrivateRoutes
                        exact
						path="/"
						isAuthenticated={ isLoggedIn }
                        component={ JournalScreen }
                    />
                </Switch>
            </div>
        </Router>
    )
}
