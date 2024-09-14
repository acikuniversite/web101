import { createSlice, createAsyncThunk, PayloadAction, } from '@reduxjs/toolkit';
import { Product } from '..';
import { fetchProduct, fetchProducts } from '../app/api';

type InitialState = {
    products: Product[],
    selectedProduct?: Product | null,
    brands: string[],
    models: string[],
    loading: boolean,
    errors: string | null | undefined,
}

const name = "products";
const initialState: InitialState = {
    products: [],
    selectedProduct: null,
    brands: [],
    models: [],
    loading: false,
    errors: null
}

export const getProducts = createAsyncThunk(
    name,
    async (_, { rejectWithValue }) => await fetchProducts().then(data => data)
        .catch(({ response }) => rejectWithValue(response.data))
);

export const getProduct = createAsyncThunk(
    name + "/id",
    async (id: number, { rejectWithValue }) => await fetchProduct(id).then(data => data)
        .catch(({ response }) => rejectWithValue(response.data))
);

export const productSlice = createSlice({
    name,
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
            state.products = [];
            state.products = action.payload;

            const brandsArray: string[] = [];
            const modelsArray: string[] = [];
            action.payload.forEach((data: Product) => {
                brandsArray.push(data.brand);
                modelsArray.push(data.model);
            });
            state.brands = [...new Set(brandsArray)];
            state.models = [...new Set(modelsArray)];

            state.loading = false;
        });
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getProducts.rejected, (state, action) => {
            state.errors = action.error.message;
            state.loading = false;
        });

        builder.addCase(getProduct.fulfilled, (state, action: PayloadAction<Product>) => {
            state.selectedProduct = action.payload;
            state.loading = false;
        })
        builder.addCase(getProduct.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getProduct.rejected, (state, action) => {
            state.errors = action.error.message;
            state.loading = false;
        })
    }
})

export default productSlice.reducer;