import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App.jsx";
import "./index.css";
// import { CounterProvider } from "./context/Counter.jsx";
// import { CartProvider } from "./context/Cart.jsx";

import { store, persistor } from "./app/store.jsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <CounterProvider> */}
    {/* <CartProvider> */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>

    {/* </CartProvider> */}
    {/* </CounterProvider> */}
  </StrictMode>
);
