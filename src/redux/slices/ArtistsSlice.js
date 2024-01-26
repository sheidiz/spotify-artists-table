import { createSlice } from "@reduxjs/toolkit";
import { getArtistsFromLocalStorage, saveInLocalStorage } from "../../utils/local-storage";

export const ARTISTS_KEY = 'artistsState';

const ArtistsEmptyState = {
    artists: []
};

//const InitialState = getArtistsFromLocalStorage(ARTISTS_KEY, ArtistsEmptyState);

export const ArtistsSlice = createSlice({
    name: "Artists",
    initialState: ArtistsEmptyState,
    reducers: {
        createArtists: (state, action) => {
            saveInLocalStorage(ARTISTS_KEY, action.payload);
            return action.payload;
        },
        resetArtists: () => {
            saveInLocalStorage(ARTISTS_KEY, ArtistsEmptyState);
            return ArtistsEmptyState;
        }
    }
});

export const { createArtists, resetArtists } = ArtistsSlice.actions;

export default ArtistsSlice.reducer;