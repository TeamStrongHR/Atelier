

export default function Slogan ({slogan, description}) {
  console.log('here',slogan, description)
  return (
    <div className="slogan" data-testid="slogan">
      <section className="description">
      <h1 key={slogan}>{slogan}</h1>
      <p key={description}>{description}</p>
      </section>
      <section className="characteristics">
        <ul>
          <li>CHECK 1</li>
          <li>CHECK 2</li>
          <li>CHECK 2</li>
        </ul>
      </section>
    </div>
  )
}