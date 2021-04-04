import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "../../axios"

const initialState = {
    status: 'idle',
    result: {},
    error: null
}

export const fetchOrganisations = createAsyncThunk(
    'organisations/fetchOrganisations', async ({query, perPage= 6, currentPage= 1}) => {
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

export const organisationsSlice = createSlice({
    name: 'organisations',
    initialState,
    reducers: {
        resetState: () => initialState
    },
    extraReducers: {
        [fetchOrganisations.pending]: state => {
            state.status = 'loading'
        },
        [fetchOrganisations.fulfilled]: (state, action) => {
            state.status = 'completed';
            const searchQuery = action.meta.arg.query;
            state.result = {...action.payload.causes, queryMeta: searchQuery};
        },
        [fetchOrganisations.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }
    }
})

export const selectOrganisations = state => state.organisations.result;
export const selectFetchStatus = state => state.organisations.status;
export const selectTotalOrganisations = state => state.organisations.result?.meta?.pagination?.total;
export const selectCurrentPage = state => state.organisations.result?.meta?.pagination?.currentPage
export const selectTotalPages = state => state.organisations.result?.meta?.pagination?.totalPages

export const {resetState} = organisationsSlice.actions;

export default organisationsSlice.reducer