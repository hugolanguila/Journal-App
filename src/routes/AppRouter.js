import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from './../components/journal/JournalScreen';

export const AppRouter = () =>{
    return(
        <Router>
            <div>
                <Switch>
                    <Route 
                        path='/auth' 
                        component={ AuthRouter } 
                    /> 
                    <Route 
                        exatc path='/' 
                        component={ JournalScreen } 
                    />
                </Switch>
            </div>
        </Router>
    );
};
