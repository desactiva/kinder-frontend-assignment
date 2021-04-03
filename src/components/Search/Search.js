import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {fetchOrganizations, resetState} from "../../features/organizations/organizationsSlice";

export const Search = () => {
    const [query, setQuery] = React.useState("");
    const [perPage, setPerPage] = useState("6");
    const [currentPage, setCurrentPage] = useState("1");
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchOrganizations({query, perPage, currentPage}));
    }
    
    const clearSearch = (e) => {
        e.preventDefault();
        setQuery("");
        dispatch(resetState());
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="query">Search effective charitable organizations</label>
            <input
                type="text"
                name="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="button" onClick={clearSearch}>Clear</button>
            <button type="submit" >Search</button>
        </form>
    );
};