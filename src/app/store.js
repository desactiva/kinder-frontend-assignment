import { configureStore } from '@reduxjs/toolkit'
import organizationsReducer from "../features/organizations/organizationsSlice";

export default configureStore({
    reducer: {
        organizations: organizationsReducer
    },
})