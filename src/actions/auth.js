import { 
	firebase,
	googleAuthProvider
} from './../firebase/firebase-config';

import { types } from './../types/types';

export const startLoginEmailPassword = ( email, password ) =>{
	return ( dispatch ) =>{
	}
}

export const startGoogleLogin = () => {
	return ( dispatch ) => {
		firebase
			.auth()
				.signInWithPopup( googleAuthProvider )
					.then( ({ user }) => {
						dispatch( login( user.uid, user.diaplayName ));
					})
	};
}

export const login= ( uid, displayName ) =>({
	type: types.login,
	payload: {
		uid, 
		displayName
	}
});