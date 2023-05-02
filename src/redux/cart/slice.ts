import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface CartItem {
    id: number;
    cardName: string;
    price: number;
    count : number;
    inStoke: boolean;
}

export interface CartState {
    items : CartItem[];
}

const initialState : CartState = {
    items: []
}

const cartSlice = createSlice({
    name : 'cart',
    initialState : initialState,
    reducers : {
        addItem(state , action) {
            // const updatedProducts = state.items.map((item) =>
            //     item.id === action.payload.id ? { ...item, inStoke: action.payload.inStoke } : item
            // );
            // console.log("updatedProducts = > ",updatedProducts)

            return {
                ...state,
                items: [...state.items, action.payload],
            };
        },
        removeItem(state , action : PayloadAction<number>) {
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload)
            };
        }
    }
})

export const cartReducer = cartSlice.reducer;
export const addItem = cartSlice.actions.addItem;
export const removeItem = cartSlice.actions.removeItem;