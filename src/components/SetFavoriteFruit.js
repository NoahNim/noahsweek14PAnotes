import { useFavFruit } from '../context/FavFruitContext'

const SetFavoriteFruit = ({ fruits }) => {
  const { favFruitId, setFavFruitId } = useFavFruit(); //this tells the function to use the useFavFruit function from the FavFruitContext context
  return (
    <div className="set-fav-fruit">
      <h2>Select your Favorite Fruit</h2>
      <label>
        <select
          // when a new fruit is selected here, the favorite fruit is changed to the new id and name
          onChange={(e) => setFavFruitId(e.target.value)}
          value={favFruitId}
        >
          {fruits.map(fruit => (
            <option
              key={fruit.id}
              value={fruit.id}
            >
              {fruit.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default SetFavoriteFruit;