import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocalStorage, saveInLocalStorage } from "../../utils/local-storage";

export const USER_KEY = 'userState';

const UserEmptyState = {
    code: '',
    token: '',
    profile: '',
};

const InitialState = getUserFromLocalStorage(USER_KEY,UserEmptyState);

export const UserSlice = createSlice({
    name: "User",
    initialState: InitialState,
    reducers: {
        createUser: (state, action) => {
            saveInLocalStorage(USER_KEY, action.payload);
            return action.payload;
        },
        resetUser: () => {
            saveInLocalStorage(USER_KEY, UserEmptyState);
            return UserEmptyState;
        }
    }
});

export const { createUser, resetUser } = UserSlice.actions;

export default UserSlice.reducer;