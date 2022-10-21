import ImageGallery from './carousel/ImageGallery.js'
import ProductSummary from './product-info/ProductSummary.js'
import Slogan from './product-info/Slogan.js'

export default function Overview () {
  return (
    <div className="overview" data-testid="overview">
      <div className="image-summary">
      <ImageGallery/>
      <ProductSummary/>
      </div>
      <Slogan/>
    </div>
  )
}