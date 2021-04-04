import React from 'react';
import {useSelector} from "react-redux";
import {
    selectCurrentPage,
    selectFetchStatus,
    selectTotalOrganisations, selectTotalPages
} from "../../features/organisations/organisationsSlice";
import {OrganisationsList} from "../OrganisationsList/OrganisationsList";
import {LoadMore} from "../LoadMore/LoadMore";
import {Spinner} from "../Spinner/Spinner";

export const SearchResults = ({result}) => {
    
    const totalOrganisations = useSelector(state => selectTotalOrganisations(state));
    const fetchStatus = useSelector(state => selectFetchStatus(state));
    const currPage = useSelector(state => selectCurrentPage(state));
    const totalPages = useSelector(state => selectTotalPages(state));
    
    return (
        <>
            <h2>{`Organisations matching ´${result.queryMeta}´(${totalOrganisations})`}</h2>
            <div >
                <OrganisationsList/>
                {
                    currPage >= 2 && fetchStatus === "loading"
                        ? <Spinner size={100}/>
                        : null
                }
                {
                    totalOrganisations > 0 && currPage <= totalPages
                        ? <LoadMore meta={result.meta} query={result.queryMeta}/>
                        : null
                }
            </div>
        </>
    );
};