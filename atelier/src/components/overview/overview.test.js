import '@testing-library/jest-dom';
import Overview from './Overview.js';

test('Overview should have ImageGallery', ()=>{
  render(<Overview/>)

  expect(imageGallery[0]).toHaveClass('image-gallery');
})
