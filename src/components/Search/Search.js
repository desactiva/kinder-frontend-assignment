import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {fetchOrganisations, resetState} from "../../features/organisations/organisationsSlice";

export const Search = React.memo(() => {
    const [query, setQuery] = React.useState("");
    const [perPage, setPerPage] = useState("6");
    const [currentPage, setCurrentPage] = useState("1");
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(resetState());
        if (query.length > 0) {
            dispatch(fetchOrganisations({query, perPage, currentPage}));
        }
    }
    
    const clearSearch = (e) => {
        e.preventDefault();
        setQuery("");
        dispatch(resetState());
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="query">Search effective charitable organisations</label>
            <input
                type="text"
                name="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="button" onClick={clearSearch}>Clear</button>
            <button type="submit">Search</button>
        </form>
    );
});