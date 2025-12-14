import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Initial state for our counter feature
// `value` represents the current count in the UI
const initialState = {
  value: 0,
};

// Example async action for testing
// In a real app, this could call an API before updating the counter
export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount) => {
    // Simulating an async result using a Promise
    return Promise.resolve(amount);
  },
);

const counterSlice = createSlice({
  name: "counter",
  initialState,

  // Synchronous reducer actions to update state immediately
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },

  // Handling async thunk response:
  // When incrementAsync finishes successfully,
  // update state using the returned payload value
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.fulfilled, (state, action) => {
      state.value += action.payload;
    });
  },
});

// Export reducer actions for React components to dispatch
export const { increment, decrement, reset } = counterSlice.actions;

// Selector: single source of truth for reading counter value
export const selectCounterValue = (state) => state.counter.value;

// Export reducer so the store can include this slice
export default counterSlice.reducer;
