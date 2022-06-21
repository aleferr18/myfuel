import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {
    cart: [],
    totPrice: 0,
    totPieces: 0
};

const cartSlice = createSlice({
    name: 'Cart',
    initialState: initialCart,
    reducers: {
        add(state, action){
            const index = state.cart.findIndex(el => el.id === action.payload.id)
            const pieces = parseInt(action.payload.pieces);
            
            if (index === -1){
                state.cart.push(action.payload);
                state.totPieces = state.totPieces + pieces;
                const amount = pieces * action.payload.price;
                state.totPrice = state.totPrice + amount;
            } else {
                state.cart[index].pieces = state.cart[index].pieces + pieces;
                const amount = pieces * action.payload.price;
                state.totPrice = state.totPrice + amount;
            }     
        },
        remove(state, action){
            const index = state.cart.findIndex(el => el.id === action.payload.id);
            const pieces = parseInt(action.payload.pieces);
            state.totPieces = state.totPieces - pieces;
            const amount = pieces * action.payload.price;
            state.totPrice = state.totPrice - amount;
            state.cart.splice(index, 1);
        }
    }
});

const store = configureStore(cartSlice);

export const cartActions = cartSlice.actions;

export default store;
