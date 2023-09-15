import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    email: null,
    name: null,
    phonenumber: null,
    namekindergarten: null,
    useragree: Boolean,
    token: null,
    id: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.phonenumber = action.payload.phonenumber;
            state.namekindergarten = action.payload.namekindergarten;
            state.useragree = action.payload.useragree;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
        },
    },
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;