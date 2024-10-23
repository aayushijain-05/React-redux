/* eslint-disable react/prop-types */

// import { useContext } from "react";
import { useCart } from "../context/Cart";

export const Item = (props) => {
  const cart = useCart();

  return (
    <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <h4 className="text-xl font-semibold mb-2 text-center">{props.name}</h4>
      <p className="text-gray-700 mb-4 text-center">Price: ${props.price}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        onClick={() => {
          cart.setItems([
            ...cart.items,
            { name: props.name, price: props.price },
          ]);
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};
