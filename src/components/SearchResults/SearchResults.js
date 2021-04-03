import React from 'react';
import {useSelector} from "react-redux";
import {
    selectCurrentPage,
    selectFetchStatus,
    selectTotalOrganizations
} from "../../features/organizations/organizationsSlice";
import {OrganizationsList} from "../OrganizationsList/OrganizationsList";
import {LoadMore} from "../LoadMore/LoadMore";

export const SearchResults = ({result}) => {
    
    const totalOrganizations = useSelector(state => selectTotalOrganizations(state));
    const fetchStatus = useSelector(state => selectFetchStatus(state));
    const currPage = useSelector(state => selectCurrentPage(state));
    
    return (
        <>
            {
                currPage === 1 && fetchStatus === "loading"
                ? <span>Loading...</span>
                :
                    <>
                        <h2>{`Organisations matching ´${result.queryMeta}´(${totalOrganizations})`}</h2>
                        <div>
                            <OrganizationsList/>
                            <LoadMore meta={result.meta} query={result.queryMeta}/>
                        </div>
                    </>
            }
        </>
    );
};