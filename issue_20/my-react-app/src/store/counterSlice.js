import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

// Async action for testing
export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async (amount) => {
    return Promise.resolve(amount)
  }
)

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    reset: (state) => {
      state.value = 0
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.fulfilled, (state, action) => {
      state.value += action.payload
    })
  },
})

export const { increment, decrement, reset } = counterSlice.actions
export default counterSlice.reducer
