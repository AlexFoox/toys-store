import {createSlice} from "@reduxjs/toolkit";

export interface CartToRemoveItem {
    id: number;
    inStoke: boolean;
}

export interface CartToRemoveState {
    items : CartToRemoveItem[];
}

const initialState : CartToRemoveState = {
    items: []
}

const cartSlice = createSlice({
    name : 'cart',
    initialState : initialState,
    reducers : {
        addItem(state , action) {
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        },
        removeItem(state , action) {
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload.id)
            };
        }
    }
})

export const cartReducer = cartSlice.reducer;
export const addItem = cartSlice.actions.addItem;
export const removeItem = cartSlice.actions.removeItem;