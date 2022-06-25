import { createSlice } from '@reduxjs/toolkit';

export const rocketsSlice = createSlice({
    name: 'common',
    initialState: {
        hasCameraAccess: false,
        hasReadExternalStorageAccess: false,
        hasWriteExternalStorageAccess: false,
    },
    reducers: {
        requestUserPermissions: (state) => {
            state.isLoading = true;
        },
        setCameraPermissionSuccess: (state, action) => {
            state.hasCameraAccess = action.payload;
        },
        setReadExternalStoragePermissionSuccess: (state, action) => {
            state.hasReadExternalStorageAccess = action.payload;
        },
        setWriteExternalStoragePermissionsSuccess: (state, action) => {
            state.hasWriteExternalStorageAccess = action.payload;
        },
        setPermissionsFailed: (state, action) => {
            state.errorMessage = action.payload.message;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    requestUserPermissions,
    setCameraPermissionSuccess,
    setReadExternalStoragePermissionSuccess,
    setWriteExternalStoragePermissionsSuccess,
    setPermissionsFailed,
} = rocketsSlice.actions;

export default rocketsSlice.reducer;
