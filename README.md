# Reference repo for React Redux Toolkit.

Optional Approach for Redux thunk using <u>axios</u> —

```bash
npm install axios
```

<ul><li>cartSlice.tsx</li></ul>

```ts
export const getCartItems = createAsyncThunk('cart/getCartItems', async (name, thunkAPI) => {
  try {
    // console.log(name);
    // console.log(thunkAPI);
    // console.log(thunkAPI.getState());
    // thunkAPI.dispatch(openModal());
    const resp = await axios(url)

    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong')
  }
})
```

### TODO —

1. [Redux Saga](https://redux-saga.js.org/) Implementation
