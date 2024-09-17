import { createSlice } from '@reduxjs/toolkit'

export const dashboardslice = createSlice({
    name: "dashboard",
    initialState: {
        dashboard: false,
    },
    reducers: {
        setDashboard: (state, action) => {
            state.dashboard = action.payload;
        },
    },
});

export const { setDashboard } = dashboardslice.actions;
export default dashboardslice.reducer;