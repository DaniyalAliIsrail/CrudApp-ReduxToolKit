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
      });
  },
});

export default userDetails.reducer;
