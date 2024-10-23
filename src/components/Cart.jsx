// import { useContext } from "react";
import { useCart } from "../context/Cart";

export const Cart = () => {
  const cart = useCart();

  const total = cart.items.reduce((a, b) => a + b.price, 0);

  return (
    <div className="max-w-md mx-auto mt-6 p-4 border border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <ul className="space-y-2 mb-4">
        {cart.items.map((item, index) => (
          <li key={index} className="flex justify-between border-b border-gray-200 pb-2">
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <h5 className="font-semibold">Total Bill: ${total.toFixed(2)}</h5>
    </div>
  );
};
