// Remember to import what you are gonna render here!
import { Switch, Route } from "react-router-dom";
import fruits from "./mockData/fruits.json";
import FruitsIndex from "./components/FruitsIndex";
import FruitForm from "./components/FruitForm";
import FavoriteFruit from "./components/FavoriteFruit";
import SetFavoriteFruit from "./components/SetFavoriteFruit"
import FruitShow from "./components/FruitShow"
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <h1>Welcome to Fruits App</h1>
      {/* Puts the Nav Bar in for the whole website */}
      <Navigation />
      {/* Use Switch so that you can do the Page Not Found */}
      <Switch>
        {/* Each path is what is rendered with Route, you use exact on / so it doesn't appear everywhere */}
        <Route path='/' exact>
          <FruitsIndex fruits={fruits} />
        </Route>
        <Route path='/fruits/new'>
          <FruitForm fruits={fruits} />
        </Route>
        <Route path='/fav-fruit/'>
          <FavoriteFruit fruits={fruits} />
        </Route>
        <Route path='/set-fav-fruit/'>
          <SetFavoriteFruit fruits={fruits} />
        </Route>
        <Route path='/fruits/:fruitId'>
          <FruitShow fruits={ fruits }/>
        </Route>
        <Route path='/'>
         <p>Page Not Found</p>
        </Route>
      </Switch>
    </>
  );
}

export default App;