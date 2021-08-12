import { createSlice } from '@reduxjs/toolkit';

export const TrackSlice = createSlice({
    name: 'Track',
    initialState: {

        track_page: 1
    },
    reducers: {

        TRACK: (state, action) => {
            state.track_page = action.payload
        }

    },
});

export const { TRACK } = TrackSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTrack = state => state.Track.track_page;

export default TrackSlice.reducer;
