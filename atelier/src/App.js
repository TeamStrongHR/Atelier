import Navbar from './components/Navbar.js';
import Overview from './components/overview/Overview.js';
import RelatedAndComparison from './components/related-items/RelatedAndComparison.js';
import RatingsAndReviews from './components/ratings-reviews/RatingsAndReviews.js'


function App() {

  return (


    <div className="App">
      <Navbar/>
      <Overview/>
      <RelatedAndComparison />
      <RatingsAndReviews/>
      <section></section>
      <aside></aside>
      <section></section>
      <aside></aside>
    </div>
  );
}

export default App;
