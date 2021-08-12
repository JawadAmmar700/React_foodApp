import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'Cart',
    initialState: {
        basket: [],

    },
    reducers: {
        Add_To_Basket: (state, action) => {

            state.basket = [...state.basket, action.payload];
        },
        Delete_Item: (state, action) => {
            const item_index = state.basket.findIndex(item => item.idMeal === action.payload)
            let newBasket = [...state.basket]
            if (item_index >= 0) {
                newBasket.splice(item_index, 1);
            }
            else {
                alert('cannot remove ')
            }

            state.basket = newBasket
        }


    },
});

export const { Add_To_Basket, Delete_Item } = CartSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCart = state => state.Cart.basket;


export default CartSlice.reducer;
