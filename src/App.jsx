// import { Counter } from "./components/Counter";
// import { useContext } from "react";
// import {ConterContext} from "./context/Counter";

import { Item } from "./components/Item";
import { Cart } from "./components/Cart";

function App() {

  // const counterState=useContext(ConterContext);
  return <>
  {/* <h1>Count is {counterState.count}</h1>
  <Counter/>
  <Counter/>
  <Counter/>
  <Counter/> */}
  <Item name="MacBook Pro" price={100000}/>
  <Item name="Pendrive" price={4000}/>
  <Item name="Mobile" price={35000}/>
  <Cart/>


  </>;
}

export default App;
