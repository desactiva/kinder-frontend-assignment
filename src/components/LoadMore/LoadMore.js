import React from 'react';
import {useDispatch} from "react-redux";
import {fetchOrganisations} from "../../features/organisations/organisationsSlice";

export const LoadMore = ({meta,query}) => {
    const dispatch = useDispatch();
    const {currentPage} = meta.pagination;
    const handleClick = () => {
        dispatch(fetchOrganisations({query, perPage: 6, currentPage: +currentPage + 1 }))
    }
    
    return (
        <button onClick={handleClick}>
            Load More
        </button>
    );
};