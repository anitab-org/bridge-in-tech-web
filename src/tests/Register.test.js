import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import '@testing-library/jest-dom';
import Register from "../register/Register";


test('renders Register', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Register />);
    expect(renderer.getRenderOutput()).toMatchSnapshot()
});