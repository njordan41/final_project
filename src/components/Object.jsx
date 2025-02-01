const Object = (props) => {
  return (
    <div>
      <img src={props.foodImage} alt="alt text" />
      <h2>{props.history}</h2>
    </div>
  )
}

export default Object
