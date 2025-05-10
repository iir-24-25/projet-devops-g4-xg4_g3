import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

test('renders correctly', () => {
  const { getByText } = render(<App />);
  // Adapte ce test selon le texte affiché dans ton App
  expect(getByText(/welcome/i)).toBeTruthy();
}); 