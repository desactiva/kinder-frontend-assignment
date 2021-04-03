import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {
    selectFetchStatus,
    selectOrganizations,
    selectTotalOrganizations
} from "../../../features/organizations/organizationsSlice";
import {SearchResults} from "../../SearchResults/SearchResults";

export const Container = () => {
    
    const result = useSelector(state => selectOrganizations(state));
    
    return (
        <div>
            {/*Check if there is anything to show*/}
            {
                Object.entries(result).length !== 0
                ? <SearchResults result={result}/>
                : null
            }
        </div>

    );
};