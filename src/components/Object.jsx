const Object = (props) => {
  return (
    <main>
      <body id="grid">
        <section>
          <h3>{props.food}</h3>
          <img src={props.foodImage} alt="food image" />
        </section>

        <section>
          <img src={props.art} alt="art image" />
        </section>

        <section>
          <h3>{props.artTitle}</h3>
          <div>
            Artist: {props.artist}, Medium: {props.medium}
          </div>
          <p>{props.history}</p>
          <p>{props.artBlurb}</p>
        </section>
      </body>
    </main>
  )
}

export default Object
