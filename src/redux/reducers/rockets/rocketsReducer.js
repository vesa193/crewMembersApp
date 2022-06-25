import { createSlice } from '@reduxjs/toolkit';

export const rocketsSlice = createSlice({
    name: 'rockets',
    initialState: {
        rocketsList: [],
        errorMessage: '',
        isLoading: false,
    },
    reducers: {
        getRocketsRequest: (state) => {
            state.isLoading = true;
        },
        setRocketsSuccess: (state, action) => {
            state.isLoading = false;
            state.rocketsList = action.payload;
        },
        setRocketsFailed: (state, action) => {
            state.errorMessage = action.payload.message;
            state.isLoading = true;
        },
    },
});

// Action creators are generated for each case reducer function
export const { getRocketsRequest, setRocketsSuccess, setRocketsFailed } = rocketsSlice.actions;

export default rocketsSlice.reducer;
