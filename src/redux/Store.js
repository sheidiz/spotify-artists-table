import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slices/UserSlice";

export const SpotifyStore = configureStore({
    reducer : {
        user: UserReducer,
    }
})