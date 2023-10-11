import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state, action) => {
            //Mutating state here
            state.items.push(action.payload);
        },
        removeItem:(state, action) => {
            //action.payload. find out index and then remove that one only 
            // state.items.pop();
            const itemToRemove = action.payload.card.info.id
            console.log(itemToRemove, "itemtoremove")
            //action.payload. find out index and then remove that one only 
            state.items = state.items.filter(item => item.card.info.id !== itemToRemove);
            console.log(state.items, "state.items");
        },
        clearCart:(state) =>{
            //RTK - either mutate the origincal state or return a new state
           // state.items.length = 0; // origincalState = []
           return {items : []}
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;