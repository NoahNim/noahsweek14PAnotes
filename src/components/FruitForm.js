import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"; //useHistory is needed to redirect in order to pass the test specs, the Redirect component from react / react-router will not pass test specs

const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple"
];

function FruitForm({ fruits }) {
  const [name, setName] = useState(""); //sets the initial state of the name input in the form to be blank
  const [color, setColor] = useState(COLORS[0]); //sets the initial state of the color selector in the form to be red, since it's the first element in the COLORS array we can access it with COLORS[0]. However, because COLORS will never change we could do useState("red") as well and that will pass the specs
  const [sweetness, setSweetness] = useState(1); //sets the initial state of the sweetness input to be 1. If you put 2, 3 etc on in here that is what would appear on the form but the test wants it to be 1. 
  const [seeds, setSeeds] = useState("yes"); //sets the initial state of the seeds radio button to be 1.
  const [errors, setErrors] = useState([]); //creates an empty array to store errors in, its initial state is empty
  const history = useHistory(); //this creates a history variable so we can redirect
  const fruitNames = fruits.map(fruit => fruit.name ) //this grabs the fruits prop and grabs each fruit by its name, storing them in fruitNames

  useEffect(() => {
    const validationErrors = []; //creates an empty array of validation errors
    if (name.length < 3) validationErrors.push("Name must be 3 or more characters"); //checks if the name input has less than 3 characters, if there are less than 3 it puts it in the validationErrors array
    if (name.length > 20) validationErrors.push("Name must be 20 characters or less"); // checks if the name input has more than 20 characters, pushes it in the validationErrors array
    if (fruitNames.includes(name)) validationErrors.push("Name already exists.") //this uses the fruitNames variable we created that mapped the fruits prop and checks to see if the entered name is already in that array
    if (sweetness < 1 || sweetness > 10) validationErrors.push("Sweetness must be between 1 and 10"); //checks to see if the sweetness number is below 1 or above 10
    setErrors(validationErrors); //this then stores any validation errors in the errors array from the state variable we declared earlier, which allows for the errors to be accessible in the whole FruitForm component
  }, [name, sweetness]); //this tells the useEffect what state variables are being referenced inside the useEffect function


  function handleForm(e) {
    e.preventDefault(); //prevents the default behavior of a submit button, which is to refresh the page!
    let formValues = {
      name,
      color,
      sweetness,
      seeds
    } //this stores the new values of the inputs in an object
    console.log(formValues); //this prints that object to the console
    history.push("/"); //this is where we use useHistory to redirect to the home page
  }

  return (
    <form
      className="fruit-form"
      onSubmit={handleForm} //tells the form to use the handleForm function on a submit
    >
      <h2>Enter a Fruit</h2>
      <ul className="errors">
        {/* this maps and lists the validation errors from the errors state array on to the page, the errors should disspear as the form is filled */}
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
      <label>
        Name
        <input
          onChange={(event) => setName(event.target.value)} //stores any new input of the name variable created earlier as a new state of that variable
          type="text"
          name="name"
          value={name}
        />
      </label>
      <label>
        Select a Color
        <select
          onChange={(event) => setColor(event.target.value)} //this stores the new selected color in the color state variable
          value={color}
        >
          {COLORS.map(color => (
            <option
              key={color}
              value={color}
            >
              {color}
            </option>
          ))}
        </select>
      </label>
      <label>
        Sweetness
        <input
          onChange={(event) => setSweetness(event.target.value)} //stores the new value as the sweetness state variable
          type="number"
          name="sweetness"
          value={sweetness}
        />
      </label>
      <label value={seeds}>
        <input
          onChange={(event) => setSeeds(event.target.value)} //if no is selected it stores that is the seeds state variable
          type="radio"
          value="no"
          name="seeds"
          checked= {seeds === "no"} //this checks if the no is checked and sets it being checked to true in the state, if no is not checked and yes is checked than it is false
        />
        No Seeds
      </label>
      <label>
        <input
          onChange={(event) => setSeeds(event.target.value)} //if yes is selected it stores that is the seeds state variable
          type="radio"
          value="yes"
          name="seeds"
          checked={seeds === "yes"} //this checks if the yes is checked and sets it being checked to true in the seeds state, if yes is not checked and no is checked than it is false
        />
        Seeds
      </label>
      <button
        type="submit"
        disabled={errors.length > 0} //if the errors array has elements than the submit button is disabled
      >
        Submit Fruit
      </button>
    </form>
  );
}

export default FruitForm;