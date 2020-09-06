import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, screen, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from "../login/Login";
import { act } from 'react-dom/test-utils';
import { BASE_API } from "../config";

const server = setupServer(
    rest.post(`${BASE_API}/login`, (req, res, ctx) => {
        const payload = {
            username: "MyUsername",
            password: "12345678",
        };
        expect(req.body).toEqual(payload)
        return res(ctx.json({ 
            access_token: "fake_access_token",
            access_expiry: 1594771200
        }))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())



it('allows the user to login successfully', async () => {
    render(<Login />)

    fireEvent.change(screen.getByPlaceholderText('Username or Email'), {
        target: { value: 'MyUsername' },
    })
    fireEvent.change(screen.getByPlaceholderText('Password'), {
        target: { value: '12345678' },
    })
    expect(screen.queryByLabelText("errorMessage")).not.toBeInTheDocument();
    
    act(() => {
        fireEvent.click(screen.getByRole('button', { name: "Login" }), {
            target: { value: 'true' },
        })
    });
    expect(screen.queryByLabelText("errorMessage")).not.toBeInTheDocument();
})

it('handles wrong credentials', async () => {
    server.use(
      rest.post(`${BASE_API}/login`, (req, res, ctx) => {
        const wrongPayload = {
            username: "MyUsername",
            password: "87654321",
        };
        expect(req.body).toEqual(wrongPayload)
        return res(ctx.status(401), ctx.json({message: 'Username or password is wrong.'}))
      }),
    )
   
    render(<Login />)
   
    fireEvent.change(screen.getByPlaceholderText('Username or Email'), {
        target: { value: 'MyUsername' },
    })
    fireEvent.change(screen.getByPlaceholderText('Password'), {
        target: { value: '87654321' },
    })
    expect(screen.queryByLabelText("errorMessage")).not.toBeInTheDocument();
    
    fireEvent.click(screen.getByRole('button', { name: "Login" }), {
        target: { value: 'true' },
    })

    await waitForElement(() => screen.getByLabelText('errorMessage'))
    
    expect(screen.getByLabelText('errorMessage')).toHaveTextContent("Username or password is wrong.")
  })

  it('handles server down', async () => {
    server.use(
      rest.post(`${BASE_API}/login`, (req, res, ctx) => {
        const wrongPayload = {
            username: "MyUsername",
            password: "87654321",
        };
        expect(req.body).toEqual(wrongPayload)
        return res(ctx.status(500), ctx.json({message: 'The server is currently unavailable. Try again later'}))
      }),
    )
   
    render(<Login />)
   
    fireEvent.change(screen.getByPlaceholderText('Username or Email'), {
        target: { value: 'MyUsername' },
    })
    fireEvent.change(screen.getByPlaceholderText('Password'), {
        target: { value: '87654321' },
    })
    expect(screen.queryByLabelText("errorMessage")).not.toBeInTheDocument();
    
    fireEvent.click(screen.getByRole('button', { name: "Login" }), {
        target: { value: 'true' },
    })

    await waitForElement(() => screen.getByLabelText('errorMessage'))
    
    expect(screen.getByLabelText('errorMessage')).toHaveTextContent("The server is currently unavailable. Try again later")
  })

it('handles password toggle', () => {
    render(<Login />)

    expect(screen.getByPlaceholderText('Password').type).toEqual("password")

    fireEvent.click(screen.getByLabelText('Show Password', { name: "show_password_checkbox" }), {
        target: { value: true },
    })
    
    expect(screen.getByPlaceholderText('Password').type).toEqual("text")
})
