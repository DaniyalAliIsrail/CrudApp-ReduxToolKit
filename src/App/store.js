import { configureStore } from "@reduxjs/toolkit";
import  userDetails  from "../feature/userDetailSlice";

export const store = configureStore({
  reducer: {
    app:userDetails
  },
});
