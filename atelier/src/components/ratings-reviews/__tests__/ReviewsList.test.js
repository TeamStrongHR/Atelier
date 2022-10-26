import {render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import ReviewsList from '../components/ReviewsList.js'
import {reviews, breakdown} from '../reviewsTestData.js'



var props = {
  reviews: reviews,
  breakdown: breakdown,
  rerender: '()=> {}',
  handleHelpful: '()=>{}',
  productName: 'NICE',
}

test("Should render ReviewsList component", ()=> {
  render(<ReviewsList {...props}/>);
  const rrComp = screen.getByTestId('reviewslist-comp')
  expect(rrComp).toBeInTheDocument();
  expect(rrComp).toContainHTML('div')

})


test('matches snapshot', ()=> {
  const tree = renderer.create(<ReviewsList {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
})
