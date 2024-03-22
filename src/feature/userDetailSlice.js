import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// create Action
export const createUser = createAsyncThunk("createUser",async(data,{rejectWithValue})=>{
  const res =await fetch("https://65f76cefb4f842e808859767.mockapi.io/crud",{
    method:"post",
    headers:{
      "Content-Type":"Application/json",
    },
    body:JSON.stringify(data)
  })
  try{
    const result = await res.json()
    console.log(result);
  }catch(error){
    rejectWithValue(error)
  }
})

//read action

export const showUser = createAsyncThunk("showUser",async(rejectWithValue)=>{
  const res =await fetch("https://65f76cefb4f842e808859767.mockapi.io/crud",)
  try{
    const result = await res.json()
    return result
    // console.log(result);
  }catch(error){
    rejectWithValue(error)
  }
})

//update action 

export const updateUser = createAsyncThunk("updateUser",async(data,{rejectWithValue})=>{
  const res =await fetch("https://65f76cefb4f842e808859767.mockapi.io/crud",{
    method:"put",
    headers:{
      "Content-Type":"Application/json",
    },
    body:JSON.stringify(data)
  })
  try{
    const result = await res.json()
    console.log(result);
  }catch(error){
    rejectWithValue(error)
  }
})


export const userDetails = createSlice({
  name: "userDetails",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.users = action.error.message;
      })
      .addCase(showUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = (action.payload);
      })
      .addCase (showUser.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.error.message
      })
  },
  // extraReducers:{
  //   [createUser.pending]: (state) => {
  //     state.loading = true;
  //   },
  //   [createUser.fulfilled]: (state) => {
  //     state.loading = false;
  //     state.users.push(action.payload);
  //   },
  //   [createUser.rejected]: (state, action) => {
  //     state.loading = false;
  //     state.error = action.payload.message
  //   },
  // }
});
export default userDetails.reducer;



