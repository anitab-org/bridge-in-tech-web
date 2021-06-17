import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, screen, wait, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import Register from "../register/Register";
import { BASE_API } from "../config";
import { BrowserRouter as Router } from "react-router-dom";


const server = setupServer(
    rest.post(`${BASE_API}/register`, (req, res, ctx) => {
        req.body = {
            name: "My Name",
            username: "MyUsername",
            password: "12345678",
            email: "myemail@xxx.xxx",
            terms_and_conditions_checked: true,
            need_mentoring: true,
            available_to_mentor: true
        };

        return res(ctx.json({ message: "User was created successfully. A confirmation email has been sent via email. After confirming your email you can login." }))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it('allows the user to register successfully', async () => {
    render(<Router><Register /></Router>)

    fireEvent.change(screen.getByPlaceholderText('Full Name'), {
        target: { value: 'My Name' },
    })
    fireEvent.change(screen.getByPlaceholderText('Username'), {
        target: { value: 'MyUsername' },
    })
    fireEvent.change(screen.getByPlaceholderText('Email'), {
        target: { value: 'myemail@xxx.xxx' },
    })
    fireEvent.change(screen.getByPlaceholderText('Password'), {
        target: { value: '12345678' },
    })
    fireEvent.change(screen.getByPlaceholderText('Confirm Password'), {
        target: { value: '12345678' },
    })
    expect(screen.getByLabelText('mentor', { name: 'available_to_mentor'}).checked).toEqual(false)
    fireEvent.click(screen.getByLabelText('mentor', { name: "available_to_mentor" }), {
        target: { value: true },
    })
    expect(screen.getByLabelText('mentee', { name: 'need_mentoring'}).checked).toEqual(false)
    fireEvent.click(screen.getByLabelText('mentee', { name: "need_mentoring" }), {
        target: { value: true },
    })
    expect(screen.getByLabelText('termsCheck', { name: 'terms_and_conditions_checked'}).checked).toEqual(false)
    fireEvent.click(screen.getByLabelText('termsCheck', { name: "terms_conditions_checked" }), {
        target: { value: true },
    })
    expect(screen.queryByLabelText("response")).not.toBeInTheDocument();
    
    fireEvent.click(screen.getByRole('button', { name: "Sign Up" }), {
        target: { value: 'true' },
    })

    await waitForElement(() => screen.getByLabelText('response'))

    expect(screen.getByLabelText('response')).toHaveTextContent("User was created successfully. A confirmation email has been sent via email. After confirming your email you can login.")
    
})

it('blocks the user to register without password confirmation', async () => {
    render(<Router><Register /></Router>)

    fireEvent.change(screen.getByPlaceholderText('Full Name'), {
        target: { value: 'My Name' },
    })
    fireEvent.change(screen.getByPlaceholderText('Username'), {
        target: { value: 'MyUsername' },
    })
    fireEvent.change(screen.getByPlaceholderText('Email'), {
        target: { value: 'myemail@xxx.xxx' },
    })
    fireEvent.change(screen.getByPlaceholderText('Password'), {
        target: { value: '12345678' },
    })
    fireEvent.change(screen.getByPlaceholderText('Confirm Password'), {
        target: { value: '1234' },
    })
    expect(screen.getByLabelText('mentor', { name: 'available_to_mentor'}).checked).toEqual(false)
    fireEvent.click(screen.getByLabelText('mentor', { name: "available_to_mentor" }), {
        target: { value: true },
    })
    expect(screen.getByLabelText('mentee', { name: 'need_mentoring'}).checked).toEqual(false)
    fireEvent.click(screen.getByLabelText('mentee', { name: "need_mentoring" }), {
        target: { value: true },
    })
    expect(screen.getByLabelText('termsCheck', { name: 'terms_and_conditions_checked'}).checked).toEqual(false)
    fireEvent.click(screen.getByLabelText('termsCheck', { name: "terms_conditions_checked" }), {
        target: { value: true },
    })
    
    fireEvent.click(screen.getByRole('button', { name: "Sign Up" }), {
        target: { value: 'true' },
    })

    expect(screen.queryByLabelText("response")).not.toBeInTheDocument();
    
})

it('handles password toggle', () => {
    render(<Router><Register /></Router>)

    expect(screen.getByPlaceholderText('Password').type).toEqual("password")
    expect(screen.getByPlaceholderText('Confirm Password').type).toEqual("password")

    fireEvent.click(screen.getByLabelText('Show Password', { name: "show_password_checkbox" }), {
        target: { value: true },
    })

    expect(screen.getByPlaceholderText('Password').type).toEqual("text")
    expect(screen.getByPlaceholderText('Confirm Password').type).toEqual("text")
})

it('checks empty field warning', async () => {
   render(<Router><Register /></Router>)

   fireEvent.change(screen.getByLabelText("Name :", { selector: "input" }), {
        target: { value: '' },
    })

   fireEvent.change(screen.getByLabelText("Username :", { selector: "input" }), {
        target: { value: '' },
    })

   fireEvent.change(screen.getByLabelText("Email :", { selector: "input" }), {
        target: { value: '' },
    })

   fireEvent.change(screen.getByLabelText("Password :", { selector: "input" }), {
        target: { value: '' },
    })
    
   fireEvent.change(screen.getByLabelText("Confirm Password :", { selector: "input" }), {
        target: { value: '' },
    })

   act(() => {
        fireEvent.click(screen.getByRole('button', { name: "Sign Up" }), {
            target: { value: 'true' },
        })
    });
    
   await wait(() => {
       expect(screen.getByLabelText("Name :", { selector: "input" })).toBeRequired();
       expect(screen.getByLabelText("Username :", { selector: "input" })).toBeRequired();
       expect(screen.getByLabelText("Email :", { selector: "input" })).toBeRequired();
       expect(screen.getByLabelText("Password :", { selector: "input" })).toBeRequired();
       expect(screen.getByLabelText("Confirm Password :", { selector: "input" })).toBeRequired();
    });    
})

it('checks validation message warning', async () => {
   render(<Router><Register /></Router>)

   fireEvent.change(screen.getByLabelText("Name :", { selector: "input" }), {
        target: { value: '%' },
    })

   fireEvent.change(screen.getByLabelText("Username :", { selector: "input" }), {
        target: { value: '&' },
    })

   fireEvent.change(screen.getByLabelText("Email :", { selector: "input" }), {
        target: { value: 'mmo' },
    })

   fireEvent.change(screen.getByLabelText("Password :", { selector: "input" }), {
        target: { value: '' },
    })
    
   fireEvent.change(screen.getByLabelText("Confirm Password :", { selector: "input" }), {
        target: { value: '' },
    })

   act(() => {
        fireEvent.click(screen.getByRole('button', { name: "Sign Up" }), {
            target: { value: 'true' },
        })
    });
    
   await wait(() => {
       expect(screen.getByLabelText("Name :", { selector: "input" })).toBeInvalid();
       expect(screen.getByLabelText("Username :", { selector: "input" })).toBeInvalid();
       expect(screen.getByLabelText("Email :", { selector: "input" })).toBeInvalid();
       expect(screen.getByLabelText("Password :", { selector: "input" })).toBeInvalid();
       expect(screen.getByLabelText("Confirm Password :", { selector: "input" })).toBeInvalid();
    });    
})     

