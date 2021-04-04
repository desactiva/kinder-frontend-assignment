import React from 'react';
import {useSelector} from "react-redux";
import {selectFetchStatus, selectOrganisations} from "../../../features/organisations/organisationsSlice";
import {SearchResults} from "../../SearchResults/SearchResults";
import {Spinner} from "../../Spinner/Spinner";

export const Container = () => {
    
    const result = useSelector(state => selectOrganisations(state));
    const fetchStatus = useSelector(state => selectFetchStatus(state));
    let content;
    
    if (Object.entries(result).length === 0 && fetchStatus === "loading") {
        content = <Spinner size={100}/>
    } else if (Object.entries(result).length > 0) {
        content = <SearchResults result={result}/>;
    } else if (Object.entries(result).length !== 0 && fetchStatus === "error") {
        content = <span>Ups! Something went wrong.</span>;
    } else {
        content = null;
    }
    
    
    return (
        <div className="container">
            {content}
        </div>
    );
};