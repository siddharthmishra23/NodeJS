function Vacation(destination, length) {
    this.destination = destination;
    this.length = length;
  }
  
  Vacation.prototype.print = function() {
    console.log(this.destination + " | " + this.length + " days");
  };
  
  const maui = new Vacation("Maui", 7);
  
  maui.print(); // Maui | 7 days

  class Vacation {
    constructor(destination, length) {
      this.destination = destination;
      this.length = length;
    }
  
    print() {
      console.log(`${this.destination} will take ${this.length} days.`);
    }
  }

  const trip = new Vacation("Santiago, Chile", 7);

  trip.print(); // Chile will take 7 days.
  class Expedition extends Vacation {
    constructor(destination, length, gear) {
      super(destination, length);
      this.gear = gear;
    }
  
    print() {
      super.print();
      console.log(`Bring your ${this.gear.join(" and your ")}`);
    }
  }
  const trip = new Expedition("Mt. Whitney", 3, [
    "sunglasses",
    "prayer flags",
    "camera"
  ]);
  
  trip.print();
  
  // Mt. Whitney will take 3 days.
  // Bring your sunglasses and your prayer flags and your camera


  const obj = {
    message: "They can be added to objects like variables",
    log(message) {
      console.log(message);
    }
  };
  
  obj.log(obj.message);
  
  // They can be added to objects like variables

// We can also add functions to arrays in JavaScript:
  const messages = [
    "They can be inserted into arrays",
    message => console.log(message),
    "like variables",
    message => console.log(message)
  ];
  
  messages[1](messages[0]); // They can be inserted into arrays
  messages[3](messages[2]); // like variables

// Functions can be sent to other functions as arguments, just like other variables:

const insideFn = logger => {
    logger("They can be sent to other functions as arguments");
  };
  
  insideFn(message => console.log(message));
  
  // They can be sent to other functions as arguments




  const createScream = function(logger) {
    return function(message) {
      logger(message.toUpperCase() + "!!!");
    };
  };
  
  const scream = createScream(message => console.log(message));
  
  scream("functions can be returned from other functions");
  scream("createScream returns a function");
  scream("scream invokes that returned function");
  
  // FUNCTIONS CAN BE RETURNED FROM OTHER FUNCTIONS!!!
  // CREATESCREAM RETURNS A FUNCTION!!!
  // SCREAM INVOKES THAT RETURNED FUNCTION!!!

  const createScream = logger => message => {
    logger(message.toUpperCase() + "!!!");
  };




  {
    $$typeof: Symbol(React.element),
    "type": "h1",
    "key": null,
    "ref": null,
    "props": {id: "recipe-0", children: "Baked Salmon"},
    "_owner": null,
    "_store": {}
  }

//   This is the structure of a React element. There are fields that are used by React: _owner, _store, and $$typeof. The key and ref fields are important to React elements, but we’ll introduce those later. For now, let’s take a closer look at the type and props fields.

// The type property of the React element tells React what type of HTML or SVG element to create. The props property represents the data and child elements required to construct a DOM element. The children property is for displaying other nested elements as text.

const dish = React.createElement("h1", null, "Baked Salmon");

ReactDOM.render(dish, document.getElementById("root"));


const dish = React.createElement("h1", null, "Baked Salmon");
const dessert = React.createElement("h2", null, "Coconut Cream Pie");

ReactDOM.render([dish, dessert], document.getElementById("root"));


<ul>
  <li>2 lb salmon</li>
  <li>5 sprigs fresh rosemary</li>
  <li>2 tablespoons olive oil</li>
  <li>2 small lemons</li>
  <li>1 teaspoon kosher salt</li>
  <li>4 cloves of chopped garlic</li>
</ul>

const list = React.createElement(
    "ul",
    null,
    React.createElement("li", null, "2 lb salmon"),
    React.createElement("li", null, "5 sprigs fresh rosemary"),
    React.createElement("li", null, "2 tablespoons olive oil"),
    React.createElement("li", null, "2 small lemons"),
    React.createElement("li", null, "1 teaspoon kosher salt"),
    React.createElement("li", null, "4 cloves of chopped garlic")
  );
  
  console.log(list);
  {
    "type": "ul",
    "props": {
    "children": [
    { "type": "li", "props": { "children": "2 lb salmon" } … },
    { "type": "li", "props": { "children": "5 sprigs fresh rosemary"} … },
    { "type": "li", "props": { "children": "2 tablespoons olive oil" } … },
    { "type": "li", "props": { "children": "2 small lemons"} … },
    { "type": "li", "props": { "children": "1 teaspoon kosher salt"} … },
    { "type": "li", "props": { "children": "4 cloves of chopped garlic"} … }
    ]
    ...
    }
}



const items = [
    "2 lb salmon",
    "5 sprigs fresh rosemary",
    "2 tablespoons olive oil",
    "2 small lemons",
    "1 teaspoon kosher salt",
    "4 cloves of chopped garlic"
  ];
  React.createElement(
    "ul",
    { className: "ingredients" },
    items.map(ingredient => React.createElement("li", null, ingredient))
  );


 // We’ll create a component by writing a function. That function will return a reusable part of a user interface.

 function IngredientsList() {
    return React.createElement(
      "ul",
      { className: "ingredients" },
      items.map((ingredient, i) =>
        React.createElement("li", { key: i }, ingredient)
      )
    );
  }
  ReactDOM.render(
    React.createElement(IngredientsList, { items: secretIngredients }, null),
    document.getElementById("root")
  );



 function IngredientsList(props) {
    return React.createElement(
      "ul",
      { className: "ingredients" },
      props.items.map((ingredient, i) =>
        React.createElement("li", { key: i }, ingredient)
      )
    );
  }

  // *********************************** legacy

  const IngredientsList = React.createClass({
    displayName: "IngredientsList",
    render() {
      return React.createElement(
        "ul",
        { className: "ingredients" },
        this.props.items.map((ingredient, i) =>
          React.createElement("li", { key: i }, ingredient)
        )
      );
    }
  });


  class IngredientsList extends React.Component {
    render() {
      return React.createElement(
        "ul",
        { className: "ingredients" },
        this.props.items.map((ingredient, i) =>
          React.createElement("li", { key: i }, ingredient)
        )
      );
    }
  }


  //***************************************************** */

//   Component properties will take two types: either a string or a JavaScript expression. JavaScript expressions can include arrays, objects, and even functions. In order to include them, you must surround them in curly braces.
<IngredientsList>
  <Ingredient />
  <Ingredient />
  <Ingredient />
</IngredientsList>
<h1 className="fancy">Baked Salmon</h1>
//Values of types other than string should also appear as JavaScript expressions:
<input type="checkbox" defaultChecked={false} />

// evample
// The data, an array of Recipe objects
const data = [ ... ];

// A function component for an individual Recipe
function Recipe (props) {
  ...
}

// A function component for the Menu of Recipes
function Menu (props) {
  ...
}

// A call to ReactDOM.render to render our Menu into the current DOM
ReactDOM.render(
  <Menu recipes={data} title="Delicious Recipes" />,
  document.getElementById("root")
);

function Menu(props) {
    return (
      <article>
        <header>
          <h1>{props.title}</h1>
        </header>
        <div className="recipes" />
      </article>
    );
  }


<div className="recipes">
  {props.recipes.map((recipe, i) => (
    <Recipe
      key={i}
      name={recipe.name}
      ingredients={recipe.ingredients}
      steps={recipe.steps}
    />
  ))}
</div>
// You could also refactor this to use spread syntax. The JSX spread operator works like the object spread operator. It will add each field of the recipe object as a property of the Recipe component. The syntax here will supply all properties to the component:
{
    props.recipes.map((recipe, i) => <Recipe key={i} {...recipe} />);
  }


  function Menu({ title, recipes }) {
    return (
      <article>
        <header>
          <h1>{title}</h1>
        </header>
        <div className="recipes">
          {recipes.map((recipe, i) => (
            <Recipe key={i} {...recipe} />
          ))}
        </div>
      </article>
    );
  }

  function Recipe({ name, ingredients, steps }) {
    return (
      <section id={name.toLowerCase().replace(/ /g, "-")}>
        <h1>{name}</h1>
        <ul className="ingredients">
          {ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient.name}</li>
          ))}
        </ul>
        <section className="instructions">
          <h2>Cooking Instructions</h2>
          {steps.map((step, i) => (
            <p key={i}>{step}</p>
          ))}
        </section>
      </section>
    );
  }

  // complete code

  const data = [
    {
      name: "Baked Salmon",
      ingredients: [
        { name: "Salmon", amount: 1, measurement: "l lb" },
        { name: "Pine Nuts", amount: 1, measurement: "cup" },
        { name: "Butter Lettuce", amount: 2, measurement: "cups" },
        { name: "Yellow Squash", amount: 1, measurement: "med" },
        { name: "Olive Oil", amount: 0.5, measurement: "cup" },
        { name: "Garlic", amount: 3, measurement: "cloves" }
      ],
      steps: [
        "Preheat the oven to 350 degrees.",
        "Spread the olive oil around a glass baking dish.",
        "Add the yellow squash and place in the oven for 30 mins.",
        "Add the salmon, garlic, and pine nuts to the dish.",
        "Bake for 15 minutes.",
        "Remove from oven. Add the lettuce and serve."
      ]
    },
    {
      name: "Fish Tacos",
      ingredients: [
        { name: "Whitefish", amount: 1, measurement: "l lb" },
        { name: "Cheese", amount: 1, measurement: "cup" },
        { name: "Iceberg Lettuce", amount: 2, measurement: "cups" },
        { name: "Tomatoes", amount: 2, measurement: "large" },
        { name: "Tortillas", amount: 3, measurement: "med" }
      ],
      steps: [
        "Cook the fish on the grill until hot.",
        "Place the fish on the 3 tortillas.",
        "Top them with lettuce, tomatoes, and cheese."
      ]
    }
  ];
  
  function Recipe({ name, ingredients, steps }) {
    return (
      <section id={name.toLowerCase().replace(/ /g, "-")}>
        <h1>{name}</h1>
        <ul className="ingredients">
          {ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient.name}</li>
          ))}
        </ul>
        <section className="instructions">
          <h2>Cooking Instructions</h2>
          {steps.map((step, i) => (
            <p key={i}>{step}</p>
          ))}
        </section>
      </section>
    );
  }
  
  function Menu({ title, recipes }) {
    return (
      <article>
        <header>
          <h1>{title}</h1>
        </header>
        <div className="recipes">
          {recipes.map((recipe, i) => (
            <Recipe key={i} {...recipe} />
          ))}
        </div>
      </article>
    );
  }
  
  ReactDOM.render(
    <Menu recipes={data} title="Delicious Recipes" />,
    document.getElementById("root")
  );



  
