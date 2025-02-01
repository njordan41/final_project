import './App.css'
import food from './data/objects.json'
import Object from './components/Object'

const App = () => {
  return (
    <div className="App">
      <h1>TEST</h1>
      {food.results.map((object) => (
        <Object
          food={object.food}
          foodImage={object.foodImage}
          history={object.history}
          artwork={object.title}
        />
      ))}
    </div>
  )
}

export default App
