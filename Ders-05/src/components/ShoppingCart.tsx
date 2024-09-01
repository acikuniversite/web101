import React, { useReducer } from "react";

// Ürün obje yapısı
interface Product {
  id: number;
  name: string;
  price: number;
}

// Sepet state yapısı
interface CartState {
  products: Product[];
}

// Action türleri
enum CartActionKind {
  ADD_PRODUCT = "ADD_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  CLEAR_CART = "CLEAR_CART",
}

// Action yapısı
interface CartAction {
  type: CartActionKind;
  payload?: Product;
}

// Reducer fonksiyonu
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActionKind.ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload!] };
    case CartActionKind.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload!.id
        ),
      };
    case CartActionKind.CLEAR_CART:
      return { ...state, products: [] };
    default:
      return state;
  }
};

// Component
const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, { products: [] });

  const addProduct = (product: Product) => {
    dispatch({ type: CartActionKind.ADD_PRODUCT, payload: product });
  };

  const removeProduct = (product: Product) => {
    dispatch({ type: CartActionKind.REMOVE_PRODUCT, payload: product });
  };

  const clearCart = () => {
    dispatch({ type: CartActionKind.CLEAR_CART });
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <button
        onClick={() => addProduct({ id: 1, name: "Product 1", price: 100 })}
      >
        Add Product 1
      </button>
      <button
        onClick={() => addProduct({ id: 2, name: "Product 2", price: 200 })}
      >
        Add Product 2
      </button>
      <button onClick={() => clearCart()}>Clear Cart</button>
      <ul>
        {state.products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => removeProduct(product)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;