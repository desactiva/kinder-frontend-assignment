import { configureStore } from '@reduxjs/toolkit'
import organisationsReducer from "../features/organisations/organisationsSlice";

export default configureStore({
    reducer: {
        organisations: organisationsReducer
    },
})