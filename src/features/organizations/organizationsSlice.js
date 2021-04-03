import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "../../axios"

const initialState = {
    status: 'idle',
    result: {},
    error: null
}

export const fetchOrganizations = createAsyncThunk(
    'organizations/fetchOrganizations', async ({query, perPage= 6, currentPage= 1}) => {
        const response = await axios.post("/search/public?include=cause.images.files,cause.logo.files,cause.categories,cause.hasPassedPreliminary,appeal.organisations.cause",
            {
                query: query,
                entities: [
                    {
                        entity: "causes", perPage: perPage, currentPage: currentPage
                    }
                ]
                
            });
        return response.data;
    });

export const organizationsSlice = createSlice({
    name: 'organizations',
    initialState,
    reducers: {
        resetState: () => initialState
    },
    extraReducers: {
        [fetchOrganizations.pending]: state => {
            state.status = 'loading'
        },
        [fetchOrganizations.fulfilled]: (state, action) => {
            state.status = 'completed';
            const searchQuery = action.meta.arg.query;
            state.result = {...action.payload.causes, queryMeta: searchQuery};
        },
        [fetchOrganizations.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }
    }
})

export const selectOrganizations = state => state.organizations.result;
export const selectFetchStatus = state => state.organizations.status;
export const selectTotalOrganizations = state => state.organizations.result?.meta?.pagination?.total;
export const selectCurrentPage = state => state.organizations.result?.meta?.pagination?.currentPage

export const {resetState} = organizationsSlice.actions;

export default organizationsSlice.reducer