import './App.css'
import food from './data/objects.json'
import Object from './components/Object'

const App = () => {
  return (
    <div className="App">
      <div className="top">
        <h1>Food in Art</h1>
        <nav>
          <ul>
            <li>About</li>
            <li>Favorite Artists</li>
            <li>Favorite Food</li>
          </ul>
        </nav>
        <h3>
          A collection of some of the food that happens to be in my kitchen that
          has been glorified in art.
        </h3>
      </div>
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
          artBlurb={object.artwork.meaningOfFood}
        />
      ))}
      <footer>
        Sources: The entire internet really. I just googled and copied and
        pasted a whole bunch. Occasionally, threw in my own sentence here and
        there. Really none of this is original and I'm sure there a copy right
        issues abound with this page. Please don't sue or get made about the
        blatant plagiarism. I, however, still like to copyright this page
        because the coding and idea for this page is all mine...
      </footer>
    </div>
  )
}

export default App
