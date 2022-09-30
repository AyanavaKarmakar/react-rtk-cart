# Reference repo for React Redux Toolkit

## Note: The [web app](https://react-rtk-clone.web.app/) has been hosted via [Firebase-Hosting](https://firebase.google.com/docs/hosting).

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

### UI Showcase —

![image](https://user-images.githubusercontent.com/89210438/193269646-05507069-3cff-4095-aabf-a332cc349c5d.png)

