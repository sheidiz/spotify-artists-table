import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slices/UserSlice";
import ArtistsReducer from "./slices/ArtistsSlice";

export const SpotifyStore = configureStore({
    reducer: {
        user: UserReducer,
        artists: ArtistsReducer
    }
})