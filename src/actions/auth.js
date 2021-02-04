import { 
	firebase,
	googleAuthProvider
} from './../firebase/firebase-config';
import Swal from 'sweetalert2';
import { types } from './../types/types';
import { startLoading, finishLoading } from './ui';

export const startLoginEmailPassword = ( email, password ) =>{
	return ( dispatch ) =>{
		dispatch( startLoading() );
		firebase.auth().signInWithEmailAndPassword( email, password )
		.then( ({ user }) => {
			dispatch( login( user.uid, user.displayName ) );		
			dispatch( finishLoading() );
		})
		.catch( err => {
			dispatch( finishLoading() );
			Swal.fire('Error', err.message, 'error');
		});
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

export const startRegisterEmailPasswordName = ( email, password, name ) =>{
	return ( dispatch ) => {
		firebase.auth().createUserWithEmailAndPassword( email, password )
			.then( async ({ user }) =>{
				await user.updateProfile({ displayName: name });
				dispatch( login( user.uid, user.displayName ));
			})
			.catch( err => {
				Swal.fire('Error', err.message, 'error');
			});
	};
}

export const login= ( uid, displayName ) =>({
	type: types.login,
	payload: {
		uid, 
		displayName
	}
});

export const startLogout = () => {
	return async ( dispatch )=>{
		firebase.auth().signOut()
			.then( () =>{
				dispatch( logout() );
			})
			.catch( err => {
				Swal.fire('Error', err.message, 'error');
			});
	}
}

export const logout = () =>({
	type: types.logout
});
