import { createSlice } from '@reduxjs/toolkit';

export const memberCrewsSlice = createSlice({
    name: 'memberCrews',
    initialState: {
        memberCrewsList: [],
        errorMessage: '',
        isLoading: false,
    },
    reducers: {
        getMemberCrewsRequest: (state) => {
            state.isLoading = true;
        },
        setMemberCrewsSuccess: (state, action) => {
            state.isLoading = false;
            state.memberCrewsList = action.payload;
        },
        setMemberCrewsFailed: (state, action) => {
            state.errorMessage = action.payload.message;
            state.isLoading = true;
        },
    },
});

// Action creators are generated for each case reducer function
export const { getMemberCrewsRequest, setMemberCrewsSuccess, setMemberCrewsFailed } =
    memberCrewsSlice.actions;

export default memberCrewsSlice.reducer;
