import React from 'react';
import {useDispatch} from "react-redux";
import {fetchOrganisations} from "../../features/organisations/organisationsSlice";

export const LoadMore = ({meta,query}) => {
    const dispatch = useDispatch();
    const {currentPage} = meta.pagination;
    const perPage = 6;
    const {total} = meta.pagination;
    
    const handleClick = () => {
        dispatch(fetchOrganisations({query, perPage, currentPage: +currentPage + 1 }))
    }
    
    return (
        <button className="load-more" onClick={handleClick}>
            {`Load ${perPage} More of ${total}`}
        </button>
    );
};