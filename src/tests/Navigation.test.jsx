import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { AuthContext } from '../AuthContext';
import Navigation from '../Navigation';

const mockAuthContext = { isAuth: true, user: "AnitaB" };

describe('Navigation', () => {

    it('should display username when user is logged in', () => {
        
        const { getByText } = render(
            <AuthContext.Provider value={mockAuthContext}>
               <BrowserRouter>
                    <Navigation />
               </BrowserRouter>
            </AuthContext.Provider>
        );
        
        expect(getByText(`Welcome back, ${mockAuthContext.user}!`)).toBeInTheDocument();
    });
});
