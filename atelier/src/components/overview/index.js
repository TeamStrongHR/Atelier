import {useState} from 'react';
import ProductSummary from './product-info/ProductSummary.js'
import DefaultStyle from './style-selector/DefaultStyle.js'

const Overview = () => {
  const [currentItem, setCurrentItem] = useState({});
  return (
    <div>
      {/* where the logo and the searchbar goes */}
      <nav></nav>
      {/* some kind of annoucements */}
      <h4>some kind of discount</h4>
      {/* this is where the carousel goes */}
      <section>
      </section>
      {/* this is where the product category, star rating, shopping cart etc,. */}
      <aside>
        <ProductSummary />
        <DefaultStyle />
      </aside>
      {/* this is for the product slogan, details */}
      <section></section>
      {/* another product details with check marks */}
      <aside></aside>
    </div>
  )
}

export default Overview;