import { useParams } from 'react-router-dom';

function FruitShow({ fruits }) {
  const { fruitId } = useParams(); //this tells the function to grabs the number from the end of the route, setting that number is fruitId
  const fruit = fruits.find(fruit => fruit.id === fruitId); //this finds any fruit in the fruits prop that matches the number in the route
  return (
    <div className="fruit-show">
      {/* lists info about the fruit */}
      <h2>{fruit.name}</h2>
      <ul>
        <li>{fruit.color}</li>
        <li>{fruit.sweetness}</li>
        <li>{fruit.seeds}</li>
      </ul>
    </div>
  );
}

export default FruitShow;