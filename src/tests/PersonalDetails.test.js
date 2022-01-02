import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, wait, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BASE_API } from '../config';
import { act } from 'react-dom/test-utils';
import PersonalDetails from '../myspace/PersonalDetails';
import { AuthContext } from '../AuthContext';

const server = setupServer(
  rest.get(`${BASE_API}/user/personal_details`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: 1,
        name: 'XYZ',
        username: 'xyz',
        email: 'xyz@123.com',
        password_hash: '',
        terms_and_conditions_checked: true,
        is_admin: false,
        registration_date: 1596728595.8790321,
        is_email_verified: true,
        email_verification_date: '2020-08-06T21:13:35.894628',
        bio: 'Student',
        location: 'India',
        occupation: 'Student',
        current_organization: 'University',
        slack_username: 'xyz-new',
        social_media_links: 'http://linkedin.com/xyz',
        skills: 'Tech, Open Source',
        interests: 'coding',
        resume_url: null,
        photo_url: null,
        need_mentoring: false,
        available_to_mentor: true,
        current_mentorship_role: null,
        membership_status: null
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('should display personal details returned from get call', async () => {
  render(
    <AuthContext.Provider value={{ access_token: 'test_access_token' }}>
      <PersonalDetails />
    </AuthContext.Provider>
  );

  await wait(() => {
    expect(screen.getByLabelText('Username :', { selector: 'input' })).toHaveValue('xyz');
    expect(screen.getByLabelText('Email :', { selector: 'input' })).toHaveValue('xyz@123.com');
    expect(screen.getByLabelText('Name :', { selector: 'input' })).toHaveValue('XYZ');
    expect(screen.getByLabelText('IRC ID :', { selector: 'input' })).toHaveValue('xyz-new');
    expect(screen.getByLabelText('Social Media Links :', { selector: 'input' })).toHaveValue(
      'http://linkedin.com/xyz'
    );
    expect(screen.getByLabelText('mentor', { name: 'available_to_mentor' })).toBeChecked();
    expect(screen.getByLabelText('mentee', { name: 'need_mentoring' })).not.toBeChecked();
    expect(screen.getByLabelText('Interests :', { selector: 'input' })).toHaveValue('coding');
    expect(screen.getByLabelText('Bio :', { selector: 'input' })).toHaveValue('Student');
    expect(screen.getByLabelText('Occupation :', { selector: 'input' })).toHaveValue('Student');
    expect(screen.getByLabelText('Location :', { selector: 'input' })).toHaveValue('India');
    expect(screen.getByLabelText('Current Organization :', { selector: 'input' })).toHaveValue(
      'University'
    );
    expect(screen.getByLabelText('Skills :', { selector: 'input' })).toHaveValue(
      'Tech, Open Source'
    );
    expect(screen.getByLabelText('Photo Url :', { selector: 'input' })).toBeEmpty();
    expect(screen.getByLabelText('Resume Url :', { selector: 'input' })).toBeEmpty();
  });
});

it('should send modified fields in payload to update', async () => {
  server.use(
    rest.put(`${BASE_API}/user/personal_details`, (req, res, ctx) => {
      expect(req.headers.get('Authorization')).toEqual('Bearer test_access_token');
      expect(req.body).toEqual({
        need_mentoring: false,
        available_to_mentor: false,
        username: '',
        name: 'Mr. XYZ',
        slack_username: '',
        social_media_links: '',
        interests: '',
        bio: '',
        location: '',
        occupation: 'Developer',
        current_organization: '',
        skills: '',
        resume_url: '',
        photo_url: ''
      });
    })
  );
  render(
    <AuthContext.Provider value={{ access_token: 'test_access_token' }}>
      <PersonalDetails />
    </AuthContext.Provider>
  );

  await wait(() => {
    fireEvent.change(screen.getByLabelText('Name :', { selector: 'input' }), {
      target: { value: 'Mr. XYZ' }
    });
    fireEvent.change(screen.getByLabelText('Occupation :', { selector: 'input' }), {
      target: { value: 'Developer' }
    });
    fireEvent.click(screen.getByRole('button', { name: 'Save' }), { target: { value: true } });
  });
});

it('checks empty field warning', async () => {
  render(<PersonalDetails />);

  fireEvent.change(screen.getByLabelText('Name :', { selector: 'input' }), {
    target: { value: '' }
  });

  fireEvent.change(screen.getByLabelText('Username :', { selector: 'input' }), {
    target: { value: '' }
  });

  act(() => {
    fireEvent.click(screen.getByRole('button', { name: 'Save' }), {
      target: { value: 'true' }
    });
  });

  await wait(() => {
    expect(screen.getByLabelText('Name :', { selector: 'input' })).toBeRequired();
    expect(screen.getByLabelText('Username :', { selector: 'input' })).toBeRequired();
  });
});

it('checks validation message warning', async () => {
  render(<PersonalDetails />);

  fireEvent.change(screen.getByLabelText('Name :', { selector: 'input' }), {
    target: { value: '%' }
  });

  fireEvent.change(screen.getByLabelText('Username :', { selector: 'input' }), {
    target: { value: '&' }
  });

  act(() => {
    fireEvent.click(screen.getByRole('button', { name: 'Save' }), {
      target: { value: 'true' }
    });
  });

  await wait(() => {
    expect(screen.getByLabelText('Name :', { selector: 'input' })).toBeInvalid();
    expect(screen.getByLabelText('Username :', { selector: 'input' })).toBeInvalid();
  });
});
