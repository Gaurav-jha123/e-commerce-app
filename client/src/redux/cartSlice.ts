import { createSlice , PayloadAction } from "@reduxjs/toolkit"

interface CartItem {
    id : string;
    title : string;
    price : number;
    quantity: number;
}

interface CartState{
    items : CartItem[];
}

const initialState : CartState = {
    items : [],
}




const cartSlice = createSlice({
    name : 'cart',
    initialState,

    reducers : {
        addToCart(state, action : PayloadAction<CartItem>){
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if(existingItem){
                existingItem.quantity += 1;
            }else{
                state.items.push({ ...action.payload , quantity : 1});
            }
        },
        removeFromCart(state , action: PayloadAction<string> ){
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearFromCart(state){
            state.items = [];
        },
    },
    
});

export const { addToCart, removeFromCart, clearFromCart} = cartSlice.actions;
export default cartSlice.reducer;