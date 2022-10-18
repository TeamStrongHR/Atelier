import OutfitCard from './OutfitCard.js';

export default function YourOutfit (props) {
  return (
    <div>
      <h1 className='related-title'>Render outfit list here</h1>
      <i className='left-arrow'>
          <i class="fa-solid fa-chevron-left fa-5x"></i>
        </i>
        <i className='right-arrow'>
          <i class="fa-solid fa-chevron-right fa-5x"></i>
        </i>
      <OutfitCard />

    </div>
  )
}