import './App.css'
import food from './data/objects.json'
import Object from './components/Object'

const App = () => {
  return (
    <div className="App">
      <h1>Food in Art</h1>
      <nav>Let's try this again</nav>
      <h3>
        A collection of some of the food that happens to be in my kitchen that
        has been glorified in art.
      </h3>
      {food.results.map((object) => (
        <Object
          key={object.objectId}
          art={object.art}
          artTitle={object.artwork.title}
          artist={object.artwork.artistName}
          medium={object.artwork.medium}
          foodImage={object.foodImage}
          food={object.food}
          history={object.history}
        />
      ))}
      <footer>Sources</footer>
    </div>
  )
}

export default App
