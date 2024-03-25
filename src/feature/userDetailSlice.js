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
    console.log("SHOW USER RESULT",result);
    return result
  }catch(error){
    rejectWithValue(error)
  }
})

//del action
export const deleteUser = createAsyncThunk("deleteUser",async(id,{rejectWithValue})=>{
  const res = await fetch(`https://65f76cefb4f842e808859767.mockapi.io/crud/${id}`,{method: "DELETE"});
  try{
    const result = await res.json()
    console.log(result);
    return result
  }catch(error){
    rejectWithValue(error)
  }
})




//update action 

export const updateUser = createAsyncThunk("updateUser",async(data,{rejectWithValue})=>{
  const res =await fetch(`https://65f76cefb4f842e808859767.mockapi.io/crud/${data.id}`,{
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

      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })

      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        const {id} = (action.payload);
        state.users = state.users.filter((ele)=>{
          return ele.id !== id
        })      })
      .addCase (deleteUser.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.error.message
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map((ele)=>(
         ele.id === action.payload.id ? action.payload : ele
        ))
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.users = action.error.message;
      })
  },
});
export default userDetails.reducer;



