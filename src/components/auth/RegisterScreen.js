import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import validator from 'validator';
import { startRegisterEmailPasswordName } from './../../actions/auth';
import { setError, removeError } from './../../actions/ui';
import { useForm } from './../../hooks/useForm';

export const RegisterScreen = () => {
    
	const dispatch = useDispatch();
	const { msgError } = useSelector( state => state.ui );

	const [ formValues, handleInputChange ] = 
		useForm({
			name: 'Hugo',
			email: 'hugo@gmail.com',
			password: '1234567',
			password2: '1234567'
		});

	const { name, email, password, password2 } = formValues;

	const handleRegister = (e) =>{
		e.preventDefault();
		if( isValid() ){
			dispatch( startRegisterEmailPasswordName( email, password, name ));
		}
	}

	const isValid = () =>{
		if( name.trim().length === 0 ){
			dispatch( setError('You must specify a name') );
			return false;
		} else if( !validator.isEmail( email )){	
			dispatch( setError('The email is not valid'));
			return false;
		} else if( password !== password2 || password.length < 7 ){
			dispatch( setError('The password length must be greater than 6 characters'));
			return false;
		}
		dispatch( removeError() );
		return true;
	}

	return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={ handleRegister } >
				{	msgError && 
					(
						<div className="auth_alert-error">
							{ msgError }
						</div>
					)
				}
                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
					value={ name }
					onChange={ handleInputChange }
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
					value={ email }
					onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
					value={ password }
					onChange={ handleInputChange }
				/>

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
					value={ password2 }
					onChange={ handleInputChange }
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

               

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
