import React, { useState } from 'react';
import { rest, restContext } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, screen, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom';
import PersonalDetails from "../myspace/PersonalDetails";
import { act } from 'react-dom/test-utils';
import { BASE_API } from "../config";
import Cookies from "js-cookie";
import AuthProvider from '../AuthContext';


const access_token = "fake_access_token"

const request_headers = {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${access_token}`,
      "Accept": "application/json",
      "Content-Type": "application/json",}
}

const server = setupServer()
    rest.get(`${BASE_API}/user/personal_details`, (req, res, ctx) => {
        req.headers = {request_headers}
        
        return res(ctx.json(
            {
                "id": 1,
                "name": "test user",
                "username": "MyUsername",
                "email": "test_user@test.com",
                "password_hash": "password hashed string",
                "terms_and_conditions_checked": true,
                "is_admin": true,
                "registration_date": 0,
                "is_email_verified": true,
                "email_verification_date": "2020-07-17T02:53:02.835Z",
                "bio": "this is bio",
                "location": "this is location",
                "occupation": "this is occupation",
                "current_organization": "this is current organization",
                "slack_username": "this is irc id",
                "social_media_links": "this is social media link",
                "skills": "this is skills",
                "interests": "this is interests",
                "resume_url": "this is resume url",
                "photo_url": "this is photo url",
                "need_mentoring": true,
                "available_to_mentor": true,
                "current_mentorship_role": 0,
                "membership_status": 0
            } 
        ))   
    })


beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it('allows the user to view personal details successfully', async () => {
    render(
    <AuthProvider value={{isAuth: true, user: "MyUsername"}} >
        <PersonalDetails />
    </AuthProvider>)

    screen.debug()
    
    expect(screen.findByPlaceholderText('username')).toEqual("MyUsername")
    expect(screen.findByPlaceholderText('email')).toEqual("test_user@test.com")
    expect(screen.findByPlaceholderText('name')).toEqual("test user")
    expect(screen.findByPlaceholderText('ircId')).toEqual("this is irc id")
    expect(screen.findByPlaceholderText('available_to_mentor')).toEqual(true)
    expect(screen.findByPlaceholderText('need_mentoring')).toEqual(true)
    expect(screen.findByPlaceholderText('interests')).toEqual("this is interests")
    expect(screen.findByPlaceholderText('bio')).toEqual("this is bio")
    expect(screen.findByPlaceholderText('location')).toEqual("this is location")
    expect(screen.findByPlaceholderText('occupation')).toEqual("this is occupation")
    expect(screen.findByPlaceholderText('current_organization')).toEqual("this is current_organization")
    expect(screen.findByPlaceholderText('skills')).toEqual("this is skills")
    expect(screen.findByPlaceholderText('resumeUrl')).toEqual("this is resume url")
    expect(screen.findByPlaceholderText('photoUrl')).toEqual("this is photo url")
})

