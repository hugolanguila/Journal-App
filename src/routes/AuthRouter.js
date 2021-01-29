import React from 'react';
import {
    Switch, 
    Route,
    Redirect
} from 'react-router-dom';

import { RegisterScreen } from './../components/auth/RegisterScreen';
import { LoginScreen } from './../components/auth/LoginScreen';

export const AuthRouter = () =>{
    return(
        <div>
            <Switch>
                <Route 
                    exatc 
                    path='/auth/login' 
                    component={ LoginScreen } 
                />
                <Route 
                    exatc 
                    path='/auth/register' 
                    component={ RegisterScreen } 
                />
                <Redirect to='/auth/login' />
            </Switch>
        </div>
    );
}
