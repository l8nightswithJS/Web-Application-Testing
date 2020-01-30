import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('it has name"Eddie"', () => {
//     const wrapper = rtl.render(<Dashboard />);
//     const hasName = wrapper.queryByText(/Eddie/i)
//     expect(hasName(Eddie).toEqual(true))
// })
