import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {fetchOrganisations, resetState} from "../../features/organisations/organisationsSlice";
import {FaTimes,FaSearch} from "react-icons/fa"
import "./Search.scss";
import {useLocation} from "react-router";

export const Search = React.memo(() => {
    const [query, setQuery] = React.useState("");
    const [perPage] = useState(6);
    const [currentPage] = useState(1);
    const dispatch = useDispatch();
    let location = useLocation();
    
    useEffect(() => {
    
        Object.fromEntries(new URLSearchParams(location.search));
        let link = Object.fromEntries(new URLSearchParams(location.search));
        const {query, perpage, currentpage} = link;
        if (query.length > 0) {
            dispatch(fetchOrganisations({query, perPage: perpage, currentPage: currentpage}));
        }
        
    }, [location.search]);
    
    
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
            
            <div className="input-group">
                <input
                    type="text"
                    name="query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="input-group-addon" type="button" onClick={clearSearch}><FaTimes/></button>
                <span style={{color:"#7c7c7c"}}>|</span>
                <button className="input-group-addon" type="submit"><FaSearch/></button>
            </div>
            
        </form>
    );
});