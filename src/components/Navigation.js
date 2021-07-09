import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    // creates navigation links in the nav bar, routing in App should take care of that
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/fruits/new'>Enter a Fruit</NavLink>
      <NavLink to='/fav-fruit'>Favorite Fruit</NavLink>
      <NavLink to='/set-fav-fruit'>Set Favorite Fruit</NavLink>
    </nav>
  );
}

export default Navigation;