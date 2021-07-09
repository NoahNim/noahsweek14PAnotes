import { Link } from "react-router-dom";

function FruitsIndex({ fruits }) {
  return (
    <div className="fruits-index">
      <h2>Fruits Index</h2>
      {/* Remember this loops through the array of the fruit objects. This tells it to render links using the each object (fruit) id to grab that object (fruit) and then it displays the object key value pair you specify (fruit name) */}
      {fruits.map((fruit) =>
        <Link key={fruit.id} to={`/fruits/${fruit.id}`}>{fruit.name}</Link>
      )}
    </div>
  )
}

export default FruitsIndex;