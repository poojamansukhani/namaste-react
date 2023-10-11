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
            state.items = state.items.filter(item => console.log("item", item));
            console.log(state.items, "state.items");
        },
        clearCart:(state) =>{
            //RTK - either mutate the origincal state or return a new state
           // state.items.length = 0; // origincalState = []
           return {items : []}
        },
        loadCart: (state, action) => {
            // Update the cart state with the loaded data
            state.items = action.payload; // Assuming payload contains the cart data
        },
    }
});

export const {addItem, removeItem, clearCart, loadCart} = cartSlice.actions;

export default cartSlice.reducer;