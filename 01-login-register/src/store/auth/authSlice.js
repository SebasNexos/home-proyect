

import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: '',
        uid: null,
        email: null
    },
    reducers: {
        
    }
});


// Action creators are generated for each case reducer function
export const { increment } = authSlice.actions; // creacion de acciones atraves de los reducers 
