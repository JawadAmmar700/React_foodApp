import { configureStore } from '@reduxjs/toolkit';
import CategoryReducer from '../features/CategorySlice';
import TrackReducer from '../features/TrackSlice';
import Cartreducer from '../features/CartSlice'

export default configureStore({
  reducer: {
    Category: CategoryReducer,
    Track: TrackReducer,
    Cart: Cartreducer
  },
});
