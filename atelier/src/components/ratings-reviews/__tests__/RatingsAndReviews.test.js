import {render, screen, cleanup} from '@testing-library/react';
import RatingsAndReviews from '../RatingsAndReviews.js';
import renderer from 'react-test-renderer';

test('Should render RatingsAndReviews component', ()=> {
  render(<RatingsAndReviews/>)
  const rrComp = screen.getByTestId('ratings-reviews-comp')
  expect(rrComp).toBeInTheDocument();
  expect(rrComp).toHaveTextContent("recommend")
  expect(rrComp).toContainHTML('div')
})

test('matches snapshot', ()=> {
  const tree = renderer.create(<RatingsAndReviews/>).toJSON();
  expect(tree).toMatchSnapshot();
})