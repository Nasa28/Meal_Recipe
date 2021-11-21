import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Meal from '../components/Meal';

afterEach(() => {
  cleanup();
});

describe('Meal component tests', () => {
  render(
    <Router>
      <Meal
        id="52874"
        name="Beef and Mustard Pie"
        image="https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg"
      />
    </Router>,
  );

  const meal = screen.getByTestId('meal-card');

  test('Should Render Meal Component', () => {
    expect(meal).toBeInTheDocument();
  });
  test('Component should contain Beef and Mustard Pie', () => {
    expect(meal).toHaveTextContent('Beef and Mustard Pie');
  });
});
