import Navbar from './components/Navbar.js';
import Overview from './components/overview/Overview.js';
import RelatedAndComparison from './components/related-items/RelatedAndComparison.js';
import './App.css';

function App() {



  return (

    <div className="App">
      <Navbar/>
      <Overview/>
      <RelatedAndComparison />
      <section></section>
      <aside></aside>
      <section></section>
      <aside></aside>
    </div>
  );
}

export default App;
