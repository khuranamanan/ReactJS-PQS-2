import "./App.css";

import { userData, products, colors, todoItems } from "./data";

import Greeting from "./Q1";
import ProductComp from "./Q2";
import UserProfile from "./Q3";
import Gadgets from "./Q4";
import Phones from "./Q5";
import Article from "./Q6";
import About from "./Q7";
import MyGadgets from "./Q8";
import ColorPicker from "./Q9";
import Todo from "./Q10";

export default function App() {
  return (
    <div className="App">
      <h1>ReactJS PQS 2</h1>
      <Greeting heading="1. Greeting Component" name="Manan" />
      <ProductComp
        heading="2. Product Component"
        productName="Apple iPhone 14 Pro Max"
        price="Rs. 1,09,999"
      />
      <UserProfile heading="3. User details Component" userObj={userData} />
      <Gadgets heading="4. Products List Component" productArr={products} />
      <Phones
        heading="5. Mobile Products List Component"
        productArr={products}
      />
      <Article
        heading="6. Heading Component"
        title="React is awesome"
        content="React is a JavaScript library for building user interfaces."
      />
      <About
        header="7. About Component"
        heading="About Me"
        name="Manan"
        learning="I am learning React JS currently at neoG Camp."
      />
      <MyGadgets
        heading="8. Products with highlighting Expensive Products Component"
        productArr={products}
      />
      <ColorPicker heading="9. Color Picker Component" colorsArr={colors} />
      <Todo heading="10. Todo Component" todoItems={todoItems} />
    </div>
  );
}
