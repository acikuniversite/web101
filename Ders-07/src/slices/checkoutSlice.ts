import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '..';

const localStorageKey = "products-in-cart";

type ProductInCart = {
    product: Product,
    qty: number,
}

type InitialState = {
    productsInCart: ProductInCart[],
    totalPrice: number,
    loading: boolean,
    errors: string | null | undefined,
}

const name = "checkout";
const initialState: InitialState = {
    productsInCart: [],
    totalPrice: 0,
    loading: false,
    errors: null
}


export const checkoutSlice = createSlice({
    name,
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            if (state.productsInCart.some(cartProduct => cartProduct.product.id === action.payload.id)) {
                state.productsInCart = state.productsInCart
                    .map(cartProduct => cartProduct.product.id === action.payload.id
                        ? { ...cartProduct, qty: cartProduct.qty + 1 }
                        : cartProduct
                    );
                localStorage.setItem(localStorageKey, JSON.stringify(state.productsInCart));
            }
            else {
                state.productsInCart.push({ product: action.payload, qty: 1 });
                localStorage.setItem(localStorageKey, JSON.stringify(state.productsInCart));
            }
            state.totalPrice += Number(action.payload.price);
        },
        removeProduct: (state, action: PayloadAction<Product>) => {
            state.productsInCart = state.productsInCart
                .filter(cartProduct => cartProduct.product.id !== action.payload.id);
            localStorage.setItem(localStorageKey, JSON.stringify(state.productsInCart));
            state.totalPrice -= Number(action.payload.price);
        },
        addProductQty: (state, action: PayloadAction<Product>) => {
            state.productsInCart = state.productsInCart
                .map(cartProduct => cartProduct.product.id === action.payload.id
                    ? { ...cartProduct, qty: cartProduct.qty + 1 }
                    : cartProduct
                );
            localStorage.setItem(localStorageKey, JSON.stringify(state.productsInCart));
            state.totalPrice += Number(action.payload.price);
        },
        removeProductQty: (state, action: PayloadAction<Product>) => {
            if (state.productsInCart.find(cartProduct => cartProduct.product.id === action.payload.id)?.qty === 1) {
                state.productsInCart = state.productsInCart
                    .filter(cartProduct => cartProduct.product.id !== action.payload.id);
                localStorage.setItem(localStorageKey, JSON.stringify(state.productsInCart));
                state.totalPrice -= Number(action.payload.price);
                return;
            }

            state.productsInCart = state.productsInCart
                .map(cartProduct => cartProduct.product.id === action.payload.id
                    ? { ...cartProduct, qty: cartProduct.qty - 1 }
                    : cartProduct
                );

            localStorage.setItem(localStorageKey, JSON.stringify(state.productsInCart));
            state.totalPrice -= Number(action.payload.price);
        },
        updateProductQty: (state, action: { payload: { product: Product, qty: number } }) => {
            if (state.productsInCart.find(cartProduct => cartProduct.product.id === action.payload.product.id)?.qty === 1) {
                state.productsInCart = state.productsInCart
                    .filter(cartProduct => cartProduct.product.id !== action.payload.product.id);
                localStorage.setItem(localStorageKey, JSON.stringify(state.productsInCart));
                state.totalPrice -= Number(action.payload.product.price);
                return;
            }

            state.productsInCart = state.productsInCart
                .map(cartProduct => cartProduct.product.id === action.payload.product.id
                    ? { ...cartProduct, qty: action.payload.qty }
                    : cartProduct
                );
            localStorage.setItem(localStorageKey, JSON.stringify(state.productsInCart));
            state.totalPrice = state.productsInCart.reduce((total, cartProduct) => total + Number(cartProduct.product.price) * cartProduct.qty, 0);
        },
        getProductsInCart: (state) => {
            const productsInCart = localStorage.getItem(localStorageKey);
            if (productsInCart) {
                state.productsInCart = JSON.parse(productsInCart);
                state.totalPrice = state.productsInCart.reduce((total, cartProduct) => total + Number(cartProduct.product.price) * cartProduct.qty, 0);
            }
        }
    },
})

export const { addProduct, removeProduct, addProductQty, removeProductQty, getProductsInCart, updateProductQty } = checkoutSlice.actions;
export default checkoutSlice.reducer;