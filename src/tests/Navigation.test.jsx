import { render } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import Navigation from '../Navigation';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();
const mockAuthContext = { isAuth: true, user: "AnitaB" };

describe('Navigation', () => {

    it('should display username when user is logged in', () => {
        
        const { getByText } = render(
            <AuthContext.Provider value={mockAuthContext}>
               <Router history={history}>
                    <Navigation />
               </Router>
            </AuthContext.Provider>
        );
        expect(getByText(`Welcome back, ${mockAuthContext.user}!`)).toBeInTheDocument();
    });
});
